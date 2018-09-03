// Sockets: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications
//var socket = new WebSocket("ws://www.example.com/socketserver", "protocolOne");

// Read the entered value from the message field
function readInputField() {
    return document.getElementById("chatMessage").value;
}

// Clear the input field for the message
function clearInputField() {
    document.getElementById("chatMessage").value = "";
}

// Scroll to bottom
function scrollToBottom() {
    // TODO: Fix for new layout
    var objDiv = document.getElementById("chatWindow");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function sendMessage(msgType = 'text') {
    var message = readInputField();

    // Make sure there is a input
    if (message != "") {

        if (checkURL(message) == true || msgType == 'image') {
            message = "<a href=\"" + message + "\" target=\"_blank\"><img src=\"" + message + "\"></a>";
        }

        $(chatWindow).append("<div class=\"chat-outgoing align-self-start bg-primary text-white p-2 mb-3\">" + message + "</div>")
        clearInputField();
    }
}


function recieveMessage() {
    $(chatWindow).append("<div class=\"chat-incomming align-self-end bg-info text-white p-2 mb-3\">" + readInputField() + "</div>")
}


function checkURL(url) {
    return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
}


function newConversation(recievers) {
    $(conversations).append("<div class=\"p-2 border-bottom\">" + recievers + "</div>");
}