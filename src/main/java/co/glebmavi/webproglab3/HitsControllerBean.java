package co.glebmavi.webproglab3;

import co.glebmavi.webproglab3.db.DAOFactory;
import co.glebmavi.webproglab3.model.AreaHitChecker;
import co.glebmavi.webproglab3.model.Hit;
import jakarta.annotation.PostConstruct;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.faces.context.ExternalContext;
import jakarta.faces.context.FacesContext;
import jakarta.inject.Named;
import jakarta.servlet.http.HttpServletRequest;

import java.io.IOException;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.LinkedList;
import java.util.List;


@Named
@ApplicationScoped
public class HitsControllerBean implements Serializable {

    @PostConstruct
    public void init() {
        hits = (LinkedList<Hit>) DAOFactory.getInstance().getResultDAO().getAllHits();
    }

    private LinkedList<Hit> hits = new LinkedList<>();

    public LinkedList<Hit> getHits() {
        return hits;
    }

    public void setHits(LinkedList<Hit> hits) {
        this.hits = hits;
    }

    public void newHit(final double x, final double y, final double r) {
        final Hit currHit = new Hit();
        final long startExec = System.currentTimeMillis();
        final boolean isHit = AreaHitChecker.isHit(x, y, r);
        final long endExec = System.currentTimeMillis();
        final long executionTime = endExec - startExec;
        currHit.setX(x);
        currHit.setY(y);
        currHit.setR(r);
        currHit.setHit(isHit);
        currHit.setCurr_date(String.valueOf(LocalDateTime.now()));
        currHit.setExec_time(String.valueOf(executionTime));
        DAOFactory.getInstance().getResultDAO().addNewHit(currHit);
//        FacesContext.getCurrentInstance().getPartialViewContext().getEvalScripts().add("drawPointXYRRes(" + x + ", " + y + ", " + r + ", " + isHit + ");");//TODO: reemplazar por js correcto
        hits.addFirst(currHit);
    }

    public void newHit(final List<Double> x, final double y, final double r) {
        for (Double xValue : x) {
            newHit(xValue, y, r);
        }
    }

    public void clearHit() {
        hits.clear();
        try {
            DAOFactory.getInstance().getResultDAO().clearHits();
            ExternalContext ec = FacesContext.getCurrentInstance().getExternalContext();
            ec.redirect(((HttpServletRequest) ec.getRequest()).getRequestURI());
        } catch (IOException ignored) {}
    }
}

