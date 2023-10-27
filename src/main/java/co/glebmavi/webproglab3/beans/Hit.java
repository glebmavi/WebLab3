package co.glebmavi.webproglab3.beans;

public class Hit implements java.io.Serializable {
    private static final long serialVersionUID = 1234L;

    private double x;
    private double y;
    private double r;
    private boolean hit;
    private String currentDate;
    private String executionTime;


    public Hit() {
        this.x = 0;
        this.y = 0;
        this.r = 0;
        this.hit = false;
        this.currentDate = "";
        this.executionTime = "";
    }

    public double getX() { return x; }
    public double getY() { return y; }
    public double getR() { return r; }
    public boolean isHit() { return hit; }
    public String getCurrentDate() { return currentDate; }
    public String getExecutionTime() { return executionTime; }

    public void setX(double x) { this.x = x; }
    public void setY(double y) { this.y = y; }
    public void setR(double r) { this.r = r; }
    public void setHit(boolean hit) { this.hit = hit; }
    public void setCurrentDate(String currentDate) { this.currentDate = currentDate; }
    public void setExecutionTime(String executionTime) { this.executionTime = executionTime; }


    @Override
    public String toString() {
        return "Hit{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", hit=" + hit +
                ", currentDate='" + currentDate + '\'' +
                ", executionTime='" + executionTime + '\'' +
                '}';
    }
}
