var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
(document.head||document.documentElement).appendChild(jq);

var s = document.createElement('script');
s.src = chrome.extension.getURL("gmail.min.js");
(document.head||document.documentElement).appendChild(s);

var s = document.createElement('script');
s.src = chrome.extension.getURL("runtime.js");
s.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head||document.documentElement).appendChild(s);
