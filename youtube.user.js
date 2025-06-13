// ==UserScript==
// @name	youtube
// @description	redirect youtube
// @version	0.5
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @match	*://*.youtube.com/*
// @run-at	document-start
// @grant	none
// ==/UserScript==

function redirectYoutubeShorts() {
	if (location.pathname.match(/^\/shorts/i)) {
		location.replace(location.protocol + "//" + location.host + "/watch?v=" + location.pathname.replace(/^\/shorts\/\/watch?v=/i);
	}
}
// run script on in-page navigation
document.addEventListener("yt-navigate-start", () => {
	redirectYoutubeShorts();
});
// run script on page load
redirectYoutubeShorts();
