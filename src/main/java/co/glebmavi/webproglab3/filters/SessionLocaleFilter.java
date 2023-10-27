package co.glebmavi.webproglab3.filters;

import jakarta.servlet.*;
import jakarta.servlet.annotation.WebFilter;
import jakarta.servlet.http.HttpServletRequest;

import java.io.IOException;
import java.util.logging.Logger;

@WebFilter(filterName = "SessionLocaleFilter", urlPatterns = {"/*"})
public class SessionLocaleFilter implements Filter {

    private static final Logger logger = Logger.getLogger(SessionLocaleFilter.class.getName());

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;

        if (req.getSession().getAttribute("sessionLocale") == null && req.getParameter("sessionLocale") == null) {
            logger.info("Setting session locale to en");
            req.getSession().setAttribute("sessionLocale", "en");
        } else if (req.getParameter("sessionLocale") != null) {
            logger.info("Setting session locale to " + req.getParameter("sessionLocale"));
            req.getSession().setAttribute("sessionLocale", req.getParameter("sessionLocale"));
        }

        chain.doFilter(request, response);
    }

}
