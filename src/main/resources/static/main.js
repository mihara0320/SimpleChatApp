
var stompClient = null;

function connect() {
    var socket = new SockJS('/websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
        stompClient.subscribe('/board/message', function (post) {
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
        time: new Date().toLocaleString(),
        name: $("#name").val(),
        message: $("#message").val()
    }
    console.log(data.time)
    stompClient.send("/app/post",{}, JSON.stringify(data));
}

function showPost(post) {
    $("#message-board").append("<tr><td>" + "Date: " + post.time + "</td></tr>");
    $("#message-board").append("<tr><td>" + "Name: " + post.name + "</td></tr>");
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