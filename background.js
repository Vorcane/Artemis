//Store URL of current tab
function GetURL(url){
  chrome.tabs.query({'active': true, 'currentWindow': true}, function (tabs) {
      var url = tabs[0].url;
  });

  return url;
}
