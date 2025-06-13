// ==UserScript==
// @name	youtube
// @description	redirect youtube shorts
// @version	0.9
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @match	*://*.youtube.com/*
// @run-at	document-idle
// @grant	none
// ==/UserScript==

if (location.pathname.match(/^\/shorts\//i)) {
	location.replace(location.protocol + "//" + location.host + location.pathname.replace(/^\/shorts\/\/watch?v=/i);
}
