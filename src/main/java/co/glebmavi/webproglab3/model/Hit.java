package co.glebmavi.webproglab3.model;

import jakarta.enterprise.context.SessionScoped;
import jakarta.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.Date;
import java.util.Objects;

@Entity
@Table(name = "web_prog_lab3_hits", schema = "s372819")
@SessionScoped
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
    private Date curr_date;
    private long exec_time;



    public Hit() {
        this.x = 0;
        this.y = 0;
        this.r = 0;
        this.hit = false;
        this.curr_date = Date.from(Instant.now());
        this.exec_time = 0;
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
    public Date getCurr_date() { return curr_date; }
    @Column(name = "exec_time")
    public Long getExec_time() { return exec_time; }

    public void setX(double x) { this.x = x; }
    public void setY(double y) { this.y = y; }
    public void setR(double r) { this.r = r; }
    public void setHit(boolean hit) { this.hit = hit; }
    public void setCurr_date(Date currentDate) { this.curr_date = currentDate; }
    public void setExec_time(Long executionTime) { this.exec_time = executionTime; }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Hit bean)) return false;
        return Objects.equals(getId(), bean.getId()) && Double.compare(getX(), bean.getX()) == 0 && Double.compare(getY(), bean.getY()) == 0 && Double.compare(getR(), bean.getR()) == 0 && isHit() == bean.isHit() && Objects.equals(getCurr_date(), bean.getCurr_date()) && Objects.equals(getExec_time(), bean.getExec_time());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId(), getX(), getY(), getR(), isHit(), getCurr_date(), getExec_time());
    }
}
