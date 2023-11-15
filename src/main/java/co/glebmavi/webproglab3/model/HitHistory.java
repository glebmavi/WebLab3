package co.glebmavi.webproglab3.model;

import java.util.ArrayList;
import java.util.List;

public class HitHistory implements java.io.Serializable {
    private static final long serialVersionUID = 1234L;

    private List<Hit> hitList;

    public HitHistory() { hitList = new ArrayList<>(); }
    public List<Hit> getHitList() { return hitList; }
    public void setHitList(List<Hit> hitList) { this.hitList = hitList; }

    @Override
    public String toString() {
        return "HitHistory{" +
                "hitList=" + hitList +
                '}';
    }

}
