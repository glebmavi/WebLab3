package co.glebmavi.webproglab3.model;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name = "web_prog_lab3_hits", schema = "s372819")
@ApplicationScoped
public class Hit implements Serializable {
    private static final long serialVersionUID = 1234L;


    @Id
    @Column
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "sequence-generator"
    )
    @SequenceGenerator(
            name = "sequence-generator",
            sequenceName = "web_prog_lab3_hits_id_seq",
            allocationSize = 1
    )
    private Long id;
    private double x;
    private double y;
    private double r;
    private boolean hit;
    private String curr_date;
    private String exec_time;



    public Hit() {
        this.x = 0;
        this.y = 0;
        this.r = 0;
        this.hit = false;
        this.curr_date = "";
        this.exec_time = "";
    }

    @Column(name = "x")
    public double getX() { return x; }
    @Column(name = "y")
    public double getY() { return y; }
    @Column(name = "r")
    public double getR() { return r; }
    @Column(name = "hit")
    public boolean isHit() { return hit; }
    @Column(name = "curr_date")
    public String getCurr_date() { return curr_date; }
    @Column(name = "exec_time")
    public String getExec_time() { return exec_time; }

    public void setX(double x) { this.x = x; }
    public void setY(double y) { this.y = y; }
    public void setR(double r) { this.r = r; }
    public void setHit(boolean hit) { this.hit = hit; }
    public void setCurr_date(String currentDate) { this.curr_date = currentDate; }
    public void setExec_time(String executionTime) { this.exec_time = executionTime; }


    @Override
    public String toString() {
        return "Hit{" +
                "x=" + x +
                ", y=" + y +
                ", r=" + r +
                ", hit=" + hit +
                ", currentDate='" + curr_date + '\'' +
                ", executionTime='" + exec_time + '\'' +
                '}';
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
