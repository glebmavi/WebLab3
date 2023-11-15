package co.glebmavi.webproglab3.db;

public class DAOFactory {
    private static HitDAO hitDAO;
    private static DAOFactory instance;

    public static DAOFactory getInstance() {
        if (instance == null)
            instance = new DAOFactory();
        return instance;
    }

    public HitDAO getResultDAO() {
        if (hitDAO == null)
            hitDAO = new HitDAOImpl();
        return hitDAO;
    }
}
