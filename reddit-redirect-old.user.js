// ==UserScript==
// @name	reddit-redirect-old
// @description	redirect reddit to old interface
// @version	2025.08.08.01
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/reddit-redirect-old.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/reddit-redirect-old.user.js
// @match	*://*.reddit.com/*
// @match	*://*.redd.it/*
// @run-at	document-start
// @grant	none
// ==/UserScript==

function redditRedirect() {
	if (window.location.hostname === "www.reddit.com" && !window.location.pathname.match(/^\/media/i)) {
		window.location.replace(window.location.protocol + "//old.reddit.com" + window.location.pathname + window.location.search + window.location.hash);
	} else if (window.location.hostname === "preview.redd.it") {
		window.location.replace(window.location.protocol + "//i.redd.it" + window.location.pathname);
	}
}

var oldHref = document.location.href;
redditRedirect();
window.onload = function() {
	var bodyList = document.querySelector("body");
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (oldHref != document.location.href) {
				oldHref = document.location.href;
				redditRedirect();
			}
		});
	});
	var config = {
		childList: true,
		subtree: true
	};
	observer.observe(bodyList, config);
};
