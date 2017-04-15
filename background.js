//TODO add IP address for Gaia server
//Gaia address
var gaia = "";
var url = "";

//Store URL of current tab
chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
    url = tabs[0].url;
});

//Send URL and receive response
var xhr = new XMLHttpRequest();
xhr.open("POST", gaia, true);
xhr.setRequestHeader("Content-type", "application/json");
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var response = JSON.parse(xhr.responseText);
        console.log("Received grade: ", response.grade);
        return response;
    }
};
var data = JSON.stringify({"type":"HTTPS", "url": url});
xhr.send(data);
