package ee.itcollege.SimpleChatApp;

/**
 * Created by masaki on 5/13/2017.
 */
public class InboundData {

    private String name;
    private String message;

    public InboundData() {
    }

    public InboundData(String name, String message) {

        this.name = name;
        this.message = message;
    }

    public String getName() {
        return name;
    }

    public String getMessage() {
        return message;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
