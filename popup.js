chrome.runtime.onMessage.addListener(function(request, sender) {
  chrome.tabs.getSelected(null,function(tab) {//get current tab without any selectors
        if (tab.url.includes("https://webreg.usc.edu") && request.action == "getSource") {
          message.innerText = request.source;
        }
    });
});

function onWindowLoad() {

  var message = document.querySelector('#message');

  chrome.tabs.executeScript(null, {
    file: "getPagesSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });

}

window.onload = onWindowLoad;