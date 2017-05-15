package ee.itcollege.SimpleChatApp;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

/**
 * Created by masaki on 5/11/2017.
 */

@Controller
public class PostController {

    @MessageMapping("/post")
    @SendTo("/board/message")
    public Post message(Message data) throws Exception {

        System.out.println(data.getName());
        System.out.println(data.getMessage());
        Thread.sleep(1000); // simulated delay
        return new Post(data);
    }

}
