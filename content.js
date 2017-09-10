chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.message === "clicked_browser_action") {
			document.getElementById('password').value = 'test';
		}
	}
);

