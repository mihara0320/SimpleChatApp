package ee.itcollege.SimpleChatApp;

/**
 * Created by masaki on 5/13/2017.
 */
public class Message {

    private String name;

    public Message() {
    }

    public Message(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}