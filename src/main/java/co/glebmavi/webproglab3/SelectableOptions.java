package co.glebmavi.webproglab3;

import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Named;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Named
@ApplicationScoped
public class SelectableOptions implements Serializable {

    private final List<String> buttonXValues;
    private final List<String> linkRValues;

    public SelectableOptions() {
        buttonXValues = new ArrayList<>();
        for (int i = -5; i <= 3; i++) {
            buttonXValues.add(String.valueOf(i));
        }
        linkRValues = new ArrayList<>();
        for (float i = 1; i <= 3; i += 0.5F) {
            linkRValues.add(String.valueOf(i));
        }
    }

    public List<String> getButtonXValues() {
        return buttonXValues;
    }
    public List<String> getLinkRValues() {
        return linkRValues;
    }

}
