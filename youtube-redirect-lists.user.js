// ==UserScript==
// @name	youtube-redirect-lists
// @description	redirect youtube lists
// @version	2025.10.03.01
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-redirect-lists.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-redirect-lists.user.js
// @match	*://*.youtube.com/*
// @run-at	document-start
// @grant	bitlogStyle
// ==/UserScript==

function youtubeRedirect() {
	if (window.location.href.indexOf("youtube.com/watch") > -1) {
		var queryString = window.location.search;
		var urlParams = new URLSearchParams(queryString);
		if (urlParams.has('v') && ((urlParams.has('list') || urlParams.has('start_radio'))) {
			window.location.replace(window.location.origin + window.location.pathname + "?v=" + urlParams.get('v'));
		}
	}
}

var oldHref = document.location.href;
youtubeRedirect();
window.onload = function() {
	var bodyList = document.querySelector("body");
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (oldHref != document.location.href) {
				oldHref = document.location.href;
				youtubeRedirect();
			}
		});
	});
	var config = {
		childList: true,
		subtree: true
	};
	observer.observe(bodyList, config);
};
