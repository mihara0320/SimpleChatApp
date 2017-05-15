
var stompClient = null;

function connect() {
    var socket = new SockJS('/websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/board/message', function (post) {
            console.log(post)
            console.log(JSON.parse(post.body).content)
            showPost(JSON.parse(post.body).content);
        });
    });
}

function disconnect() {
    if (stompClient != null) {
        stompClient.disconnect();
    }
}

function sendInfo() {
    var data = {
        name: $("#name").val(),
        message: $("#message").val()
    }
    stompClient.send("/app/post",{}, JSON.stringify(data));
}

function showPost(post) {
    console.log(post)
    $("#message-board").append("<tr><td>" + post.name + "</td></tr>");
    $("#message-board").append("<tr><td>" + post.message + "</td></tr>");
}

$(function () {
    connect();

    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $("#post").click(function() {
        sendInfo();
    });
});