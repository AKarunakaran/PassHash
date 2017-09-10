chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if(request.message === "clicked_browser_action") {
			var str = document.getElementById('handle').value;
			//str = str.split("").reverse().join("");
			var url = window.location.href;
			var slash = 0;
			var idxStart = 0;
			var idxEnd = 0;
			for(var i = 0; i < url.length; ++i) {
				if(slash == 2 && idxStart == 0) {
					idxStart = i;
				}
				if(url.charAt(i) == '/') {
					if(slash == 2) {
						idxEnd = i;
						break;
					}
					++slash;
				}
			}
			url = url.slice(idxStart, idxEnd);
			str = str.concat(url);
			document.getElementById('handle').value = str;
		}
	}
);