// ==UserScript==
// @name	youtube-redirect-shorts
// @description	redirect youtube shorts
// @version	2025.07.30.7
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-redirect-shorts.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-redirect-shorts.user.js
// @match	*://*.youtube.com/*
// @run-at	document-start
// @grant	bitlogStyle
// ==/UserScript==

var oldHref = document.location.href;
if (window.location.href.indexOf('youtube.com/shorts') > -1) {
	window.location.replace(window.location.toString().replace('/shorts/', '/watch?v='));
}
window.onload = function() {
	var bodyList = document.querySelector("body")
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (oldHref != document.location.href) {
				oldHref = document.location.href;
				if (window.location.href.indexOf('youtube.com/shorts') > -1) {
					window.location.replace(window.location.toString().replace('/shorts/', '/watch?v='));
				}
			}
		});
	});
	var config = {
		childList: true,
		subtree: true
	};
	observer.observe(bodyList, config);
};
