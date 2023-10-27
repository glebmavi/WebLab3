package co.glebmavi.webproglab3.servlets;

import co.glebmavi.webproglab3.beans.HitHistory;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.MultipartConfig;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.logging.Logger;

@WebServlet("/controller")
@MultipartConfig
public class ControllerServlet extends jakarta.servlet.http.HttpServlet {

    private static final Logger logger = Logger.getLogger(ControllerServlet.class.getName());

    public ControllerServlet() {
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        logger.info("doPost() called");
        long startTime = System.nanoTime();

        String[] x = request.getParameterValues("X");
        String y = request.getParameter("Y");
        String r = request.getParameter("R");

        HitHistory hitHistory = (HitHistory) request.getSession().getAttribute("hitHistory");

        if (x == null || y == null || r == null) {
            request.setAttribute("errorMessage", "Неверный формат данных");
            logger.info("Some data missing");
            request.getSession().setAttribute("hitHistory", hitHistory);
            getServletContext()
                    .getRequestDispatcher("/index.jsp")
                    .forward(request, response);
            return;
        }

        request.setAttribute("startTime", startTime);
        request.getSession().setAttribute("hitHistory", hitHistory);
        logger.info("Redirecting to areaCheck");
        getServletContext().getRequestDispatcher("/areaCheck").forward(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        logger.info("doGet() called");
        HitHistory hitHistory = (HitHistory) request.getSession().getAttribute("hitHistory");
        request.getSession().setAttribute("hitHistory", hitHistory);
        logger.info("Redirecting to index.jsp");
        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        logger.info("doRemove() called");
        request.getSession().setAttribute("hitHistory", new HitHistory());
        logger.info("Deleted HitHistory");
        logger.info("Redirecting to index.jsp");
        getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
    }
}
