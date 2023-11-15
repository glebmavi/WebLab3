package co.glebmavi.webproglab3.model;

import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;

import java.io.Serializable;

@Named
@SessionScoped
public class SelectRBean implements Serializable {
    private Double r;

    public Double getR() {
        return r;
    }

    public void setR(Double r) {
        this.r = r;
    }

    public void updateR(String rString) {
        setR(Double.parseDouble(rString));
    }
}
