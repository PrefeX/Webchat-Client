var username = getParam("name");

// TODO: Implement
function refresh() {
    $(chatWindow).append("<p>Refreshing...</p>");
}


// Send a message to the server, and clear the users input field
// Example IMG: https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png
function submitMessage(type) {

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
}


// Return the current message
function readInputField() {
    return document.getElementById("chatMessage").value;
}

// Clear the input field
function clearInputField() {
    document.getElementById("chatMessage").value = "";
}

// Scroll to bottom
function scrollToBottom() {
    var objDiv = document.getElementById("chatWindow");
    objDiv.scrollTop = objDiv.scrollHeight;
}


// Extracts the value of a given parameter from the url
function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    // split param and value into individual pieces
    for (var i = 0; i < params.length; i++) {
        var temp = params[i].split("=");
        if (temp[0] === sname) {
            sval = temp[1];
        }
    }

    // If requesting the username, mark blank names as Guest
    if (sname == "name" && sval == "") {
        sval = "Guest"
    }
    return sval;
}