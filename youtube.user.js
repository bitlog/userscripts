// ==UserScript==
// @name	youtube
// @description	redirect youtube
// @version	0.3
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @match	*://*.youtube.com/*
// @run-at	document-idle
// @grant	none
// ==/UserScript==

// redirect shorts
if (location.pathname.match(/^\/shorts\//) {
	location.replace(location.protocol + "//" + location.host + "/watch?v=" + location.pathname.match(/^\/shorts\/(.+)/)[1]);
}
