chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.message === "clicked_browser_action") {
			var str = document.getElementById('handle').value;
			str = str.split("").reverse().join("");
			document.getElementById('handle').value = str;
		}
	}
);

