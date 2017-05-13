
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
    stompClient.send("/app/post", {}, JSON.stringify({'name': $("#name").val()}));
//    stompClient.send("/app/message", {}, JSON.stringify({'message': $("#message").val()}));
//    stompClient.send("/app/post", {}, {}));
}

function showPost(post) {
    console.log(post)
    $("#message-board").append("<tr><td>" + post + "</td></tr>");
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