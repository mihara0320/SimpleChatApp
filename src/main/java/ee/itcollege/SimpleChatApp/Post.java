package ee.itcollege.SimpleChatApp;

import java.util.Objects;

/**
 * Created by masaki on 5/11/2017.
 */
public class Post {

    private Object content;

    public Post() {
    }

    public Post(Object content) {
        this.content = content;
    }

    public Object getContent() {
        return content;
    }
}
