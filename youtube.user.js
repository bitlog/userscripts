// ==UserScript==
// @name	youtube
// @description	redirect youtube
// @version	0.4
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @match	*://*.youtube.com/*
// @run-at	document-start
// @grant	none
// ==/UserScript==

function redirectYoutubeShorts() {
	const videoId = window.location.pathname.match(/^\/shorts\/(.+)/i)[1];
	if (videoId) {
		location.replace(location.protocol + "//" + location.host + "/watch?v=" + ${videoId});
	}
}
// run script on in-page navigation
document.addEventListener("yt-navigate-start", () => {
	redirectYoutubeShorts();
});
// run script on page load
redirectYoutubeShorts();
