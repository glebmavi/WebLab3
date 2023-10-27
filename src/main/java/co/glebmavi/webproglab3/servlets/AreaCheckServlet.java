package co.glebmavi.webproglab3.servlets;

import co.glebmavi.webproglab3.beans.Hit;
import co.glebmavi.webproglab3.beans.HitHistory;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.logging.Logger;

@WebServlet("/areaCheck")
public class AreaCheckServlet extends jakarta.servlet.http.HttpServlet {

    private static final Logger logger = Logger.getLogger(AreaCheckServlet.class.getName());
    private static final double MIN_X = -4, MAX_X = 4;
    private static final double MIN_Y = -5, MAX_Y = 3;
    private static final double MIN_R = 1, MAX_R = 3;


    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        logger.info("doPost() called");


        double y, r;
        double[] xValues;
        try {
            xValues = Arrays.stream(request.getParameterValues("X"))
                    .mapToDouble(Double::parseDouble)
                    .map(d -> Math.round(d * 1000.0) / 1000.0)
                    .toArray();

            y = Math.round(Double.parseDouble(request.getParameter("Y")) * 1000.0) / 1000.0;
            r = Math.round(Double.parseDouble(request.getParameter("R")) * 1000.0) / 1000.0;
        } catch (NumberFormatException e) {
            request.setAttribute("errorMessage", "Неверный формат данных");
            logger.info("Invalid data format");
            getServletContext()
                    .getRequestDispatcher("/index.jsp")
                    .forward(request, response);
            return;
        }

        HitHistory hitHistory = (HitHistory) request.getSession().getAttribute("hitHistory");
        HitHistory currentHitHistory = new HitHistory();

        for (double x : xValues) {
            Hit hit = new Hit();
            hit.setX(x);
            hit.setY(y);
            hit.setR(r);
            hit.setCurrentDate(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")));
            hit.setHit(isHit(x, y, r));

            double startTime = Long.parseLong(request.getAttribute("startTime").toString());
            double endTime = System.nanoTime();

            hit.setExecutionTime(String.valueOf(Math.round(((endTime - startTime) / 1000000) * 1000.0) / 1000.0));
            hitHistory.getHitList().add(hit);
            currentHitHistory.getHitList().add(hit);
            logger.info(hit + "added to history");
        }

        request.getSession().setAttribute("currentHitHistory", currentHitHistory);
        logger.info("HitHistory: " + request.getSession().getAttribute("hitHistory"));
        request.getSession().setAttribute("hitHistory", hitHistory);
        logger.info("Redirecting to ResultServlet");
        getServletContext()
                .getRequestDispatcher("/result")
                .forward(request, response);
    }

    private boolean isHit(double x, double y, double r) {
        if (variablesValidation(x, y, r)) return isRectangle(x, y, r) || isTriangle(x, y, r) || isCircle(x, y, r);
        return false;
    }

    private boolean variablesValidation(double x, double y, double r) {
        return (x >= MIN_X && x <= MAX_X) && (y >= MIN_Y && y <= MAX_Y) && (r >= MIN_R && r <= MAX_R);
    }

    private boolean isRectangle(double x, double y, double r) {
        return x >= 0 && x <= r/2 && y >= 0 && y <= r;
    }

    private boolean isTriangle(double x, double y, double r) {
        return x <= 0 && y <= 0 && y >= -0.5 * (x + r);
    }

    private boolean isCircle(double x, double y, double r) {
        return x >= 0 && y <= 0 && x * x + y * y <= r * r;
    }

}
