package co.glebmavi.webproglab3.servlets;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.logging.Logger;

@WebServlet("/result")
public class ResultServlet extends HttpServlet {

    private static final Logger logger = Logger.getLogger(ResultServlet.class.getName());

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        logger.info("doPost() called");
        logger.info("Redirecting to result.jsp");
        getServletContext()
                .getRequestDispatcher("/result.jsp")
                .forward(request, response);
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        logger.info("doGet() called");
        logger.info("Redirecting to result.jsp");
        request.setAttribute("currentHitHistory", request.getSession().getAttribute("currentHitHistory"));
        request.getRequestDispatcher("/result.jsp").forward(request, response);
    }
}
