// ==UserScript==
// @name	youtube
// @description	youtube userscript, including youtube shorts redirect
// @version	0.11
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @match	*://*.youtube.com/*
// @run-at	document-idle
// @grant	bitlogStyle
// ==/UserScript==

function shortsRedirectChecker() {
	if (location.pathname.match(/^\/shorts\//i)) {
		location.replace(location.protocol + "//" + location.host + location.pathname.replace(/^\/shorts\/\/watch?v=/i);
	}
	setTimeout(shortsRedirectChecker, 500);
}
shortsRedirectChecker();

bitlogStyle(`
/* Remove shorts thumbnail in homepage and search */
[is-shorts], [aria-label="Shorts"], #guide-button, [tab-title="Shorts"] {
	display: none;
}
ytd-reel-shelf-renderer {
	display: none;
}
`)
