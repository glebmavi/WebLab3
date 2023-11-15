package co.glebmavi.webproglab3.model;

import jakarta.enterprise.context.SessionScoped;
import jakarta.faces.application.FacesMessage;
import jakarta.faces.component.UIComponent;
import jakarta.faces.context.FacesContext;
import jakarta.faces.validator.ValidatorException;
import jakarta.inject.Named;

import java.io.Serializable;
import java.util.ResourceBundle;

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

    public void validate(FacesContext context, UIComponent component, Object value) throws ValidatorException {
        if (value == null) {
            FacesMessage message = new FacesMessage(
                    ResourceBundle.getBundle("i18n.messages", context.getViewRoot().getLocale())
                            .getString("rRequired"));
            context.addMessage(component.getClientId(context), message);
            throw new ValidatorException(message);
        }
    }
}
