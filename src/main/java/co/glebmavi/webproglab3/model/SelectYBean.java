package co.glebmavi.webproglab3.model;

import jakarta.enterprise.context.SessionScoped;
import jakarta.faces.application.FacesMessage;
import jakarta.faces.component.UIComponent;
import jakarta.faces.context.FacesContext;
import jakarta.faces.validator.ValidatorException;
import jakarta.inject.Named;

import java.io.Serializable;
import java.text.MessageFormat;
import java.util.ResourceBundle;

@Named
@SessionScoped
public class SelectYBean implements Serializable {
    private Double y;
    private Double svgY;

    public Double getSvgY() {
        return svgY;
    }

    public void setSvgY(Double svgY) {
        this.svgY = svgY;
    }

    public Double getY() {
        return y;
    }

    public void setY(Double y) {
        this.y = y;
    }

    public void validate(FacesContext context, UIComponent component, Object value) throws ValidatorException {
        if (value == null) {
            FacesMessage message = new FacesMessage(
                    ResourceBundle.getBundle("i18n.messages", context.getViewRoot().getLocale())
                            .getString("yRequired"));
            context.addMessage(component.getClientId(context), message);
            setY(null);
            throw new ValidatorException(message);
        }

        double yValue = Double.parseDouble(value.toString());
        Object[] args = {AreaHitChecker.MIN_Y, AreaHitChecker.MAX_Y};
        String messageText = MessageFormat.format(ResourceBundle.getBundle("i18n.messages", context.getViewRoot().getLocale())
                .getString("index.yMessage.default"), args);

        if (yValue < -3 || yValue > 5) {
            FacesMessage message = new FacesMessage(messageText);
            context.addMessage(component.getClientId(context), message);
            setY(null);
            throw new ValidatorException(message);
        }
    }
}
