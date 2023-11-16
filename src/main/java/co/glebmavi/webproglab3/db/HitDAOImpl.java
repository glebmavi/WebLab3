package co.glebmavi.webproglab3.db;

import co.glebmavi.webproglab3.model.Hit;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.Root;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

public class HitDAOImpl implements HitDAO {
    private final EntityManager entityManager = JPAUtils.getFactory().createEntityManager();


    @Override
    public void addNewHit(Hit hit) {
        entityManager.getTransaction().begin();
        entityManager.persist(hit);
        entityManager.getTransaction().commit();
    }

    @Override
    public void updateHit(Long result_id, Hit hit) {
        entityManager.getTransaction().begin();
        entityManager.merge(hit);
        entityManager.getTransaction().commit();
    }

    @Override
    public Hit getHitById(Long result_id) {
        return entityManager.getReference(Hit.class, result_id);
    }

    @Override
    public Collection<Hit> getAllHits() {
        var cm = entityManager.getCriteriaBuilder().createQuery(Hit.class);
        Root<Hit> root = cm.from(Hit.class);
        List<Hit> resultList = entityManager.createQuery(cm.select(root)).getResultList();
        return new LinkedList<>(resultList);
    }

    @Override
    public void deleteHit(Hit hit) {
        entityManager.getTransaction().begin();
        entityManager.remove(hit);
        entityManager.getTransaction().commit();
    }

    @Override
    public void clearHits() {
        entityManager.getTransaction().begin();
        entityManager.createQuery("DELETE FROM Hit").executeUpdate();
        entityManager.getTransaction().commit();
    }
}
