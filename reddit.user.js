// ==UserScript==
// @name	reddit
// @description	redirect reddit to old interface
// @version	0.8
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/reddit.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/reddit.user.js
// @match	*://*.reddit.com/*
// @match	*://*.redd.it/*
// @run-at	document-start
// @grant	none
// ==/UserScript==

if (location.hostname === "preview.redd.it") {
	location.replace(location.protocol + "//i.redd.it" + location.pathname);
} else if (location.hostname === "www.reddit.com" && !location.pathname.match(/^\/media/i)) {
	location.replace(location.protocol + "//old.reddit.com" + location.pathname + location.search + location.hash);
}
