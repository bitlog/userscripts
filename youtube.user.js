// ==UserScript==
// @name	youtube
// @description	redirect youtube
// @version	0.7
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @match	*://*.youtube.com/*
// @run-at	document-idle
// @grant	none
// ==/UserScript==

window.document.addEventListener("yt-navigate-start", redirectYoutubeShorts(), false);
window.document.addEventListener("yt-navigate-finish", redirectYoutubeShorts(), false);
redirectYoutubeShorts();


function redirectYoutubeShorts() {
	if (window.location.pathname.match(/^\/shorts\//i)) {
		window.location.replace(window.location.protocol + "//" + window.location.host + window.location.pathname.replace(/^\/shorts\/\/watch?v=/i);
	}
}
