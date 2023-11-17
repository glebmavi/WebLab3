package co.glebmavi.webproglab3.model;

import jakarta.faces.view.ViewScoped;
import jakarta.inject.Inject;
import jakarta.inject.Named;

import java.io.Serializable;

@Named
@ViewScoped
public class SubmitButton implements Serializable {
    @Inject
    SelectXBean xBean;
    @Inject
    SelectYBean yBean;
    @Inject
    SelectRBean rBean;

    private boolean disable;

    public SubmitButton() {
        disable = true;
    }
    public boolean isDisable() {
        return xBean.getSelectedX().isEmpty() || yBean.getY() == null || rBean.getR() == null;
    }

    public void setDisable(boolean disable) {
        this.disable = disable;
    }
}
