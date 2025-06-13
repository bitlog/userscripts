// ==UserScript==
// @name	youtube
// @description	redirect youtube
// @version	0.1
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @match	*://*.youtube.com/*
// @run-at	document-start
// @grant	none
// ==/UserScript==

// redirect shorts
const videoId = location.pathname.match(/^\/shorts\/(.+)/)[1];
if (videoId) {
	location.replace(location.protocol + "//" + location.host + "/watch?v=" + ${videoId});
}
