package co.glebmavi.webproglab3.db;

import co.glebmavi.webproglab3.model.Hit;
import java.util.Collection;

public interface HitDAO {
    void addNewHit(Hit hit);

    void updateHit(Long result_id, Hit hit);

    Hit getHitById(Long result_id);

    Collection<Hit> getAllHits();

    void deleteHit(Hit hit);

    void clearHits();
}
