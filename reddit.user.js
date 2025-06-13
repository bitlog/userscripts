// ==UserScript==
// @name	reddit
// @description	redirect reddit to old interface
// @version	0.9
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/reddit.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/reddit.user.js
// @match	*://*.reddit.com/*
// @match	*://*.redd.it/*
// @run-at	document-start
// @grant	none
// ==/UserScript==

if (window.location.hostname === "preview.redd.it") {
	window.location.replace(window.location.protocol + "//i.redd.it" + window.location.pathname);
} else if (window.location.hostname === "www.reddit.com" && !window.location.pathname.match(/^\/media/i)) {
	window.location.replace(window.location.protocol + "//old.reddit.com" + window.location.pathname + window.location.search + window.location.hash);
}
