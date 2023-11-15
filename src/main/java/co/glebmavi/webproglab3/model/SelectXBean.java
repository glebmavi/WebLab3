package co.glebmavi.webproglab3.model;

import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Named
@SessionScoped
public class SelectXBean implements Serializable {

    private final List<Double> selectedX;

    private Double svgX;

    public Double getSvgX() {
        return svgX;
    }

    public void setSvgX(Double svgX) {
        this.svgX = svgX;
    }

    public SelectXBean() {
        selectedX = new ArrayList<>();
    }

    public void toggle(Double clickedValue) {
        if (selectedX.contains(clickedValue)) {
            selectedX.remove(clickedValue);
        } else {
            selectedX.add(clickedValue);
        }
    }

    public List<Double> getSelectedX() {
        return selectedX;
    }

}
