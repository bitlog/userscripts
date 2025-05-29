// ==UserScript==
// @name	reddit
// @description	redirect reddit to old interface
// @version	0.6
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/reddit.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/reddit.user.js
// @match	*://*.reddit.com/*
// @match	*://preview.redd.it/*
// @run-at	document-start
// @grant	none
// ==/UserScript==

if (location.hostname === "preview.redd.it") {
	location.replace(location.protocol + "//i.redd.it" + location.pathname);
} else if (location.hostname !== "old.reddit.com" && location.pathname.indexOf('/poll/') !== 0 && location.pathname.indexOf('/gallery/') !== 0 && location.pathname.indexOf('/media?url') !== 0) {
	var oldReddit = location.protocol + "//old.reddit.com" + location.pathname + location.search + location.hash;
	location.replace(oldReddit);
}
