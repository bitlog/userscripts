// ==UserScript==
// @name	youtube-disable-automute
// @description	disable youtube auto-mute
// @version	2025.08.08.01
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-disable-automute.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-disable-automute.user.js
// @match	*://*.youtube.com/*
// @run-at	document-end
// @grant	bitlogStyle
// ==/UserScript==

var disableAutoMute = window.setInterval(function(window) {
	let button = window.document.querySelector("button.unmute");
	if (button.getAttribute("style") != "display: none;") {
		button.click();
		window.clearInterval(disableAutoMute);
	}
}, 1024, window);
