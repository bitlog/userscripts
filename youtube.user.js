// ==UserScript==
// @name	youtube
// @description	redirect youtube shorts
// @version	0.8
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @match	*://*.youtube.com/shorts/*
// @run-at	document-idle
// @grant	none
// ==/UserScript==

window.location.replace(window.location.protocol + "//" + window.location.host + window.location.pathname.replace(/^\/shorts\/\/watch?v=/i);
