// ==UserScript==
// @name	reddit-redirect-old
// @description	redirect reddit to old interface
// @version	2025.07.30.1
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/reddit-redirect-old.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/reddit-redirect-old.user.js
// @match	*://*.reddit.com/*
// @match	*://*.redd.it/*
// @run-at	document-start
// @grant	none
// ==/UserScript==

if (location.hostname === "www.reddit.com" && !location.pathname.match(/^\/media/i)) {
	location.replace(location.protocol + "//old.reddit.com" + location.pathname + location.search + location.hash);
} else if (location.hostname === "preview.redd.it") {
	location.replace(location.protocol + "//i.redd.it" + location.pathname);
}
