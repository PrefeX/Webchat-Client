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


// Send a message to the server, and clear the users input field
// Example IMG: https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png
/* function submitMessage(type) {

    var codePrefix = "<p><b>" + username + ":</b> ";
    var codeSuffix = "</p>";
    var string = "";

    // Make sure the input isn't empty before we start
    if (readInputField() != "") {

        if (type == "img") {
            string = codePrefix + "<br><img src=\"" + readInputField() + "\" class=\"img-fluid\">" + codeSuffix;
        } else {
            string = codePrefix + readInputField() + codeSuffix;
        }

        $(chatWindow).append(string);

        clearInputField();
        scrollToBottom();
    }
} */