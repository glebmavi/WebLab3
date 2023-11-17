package co.glebmavi.webproglab3.viewUtils;

import jakarta.enterprise.context.RequestScoped;
import jakarta.inject.Named;
import jakarta.faces.context.FacesContext;

@Named
@RequestScoped
public class ErrorHandler {
    public String getStatusCode() {
        return String.valueOf(FacesContext.getCurrentInstance().getExternalContext()
                .getRequestMap().get("jakarta.servlet.error.status_code"));
    }
    public String getMessage() {
        return (String) FacesContext.getCurrentInstance().getExternalContext()
                .getRequestMap().get("jakarta.servlet.error.message");
    }
    public String getRequestURI() {
        return (String) FacesContext.getCurrentInstance().getExternalContext()
                .getRequestMap().get("jakarta.servlet.error.request_uri");
    }

}
