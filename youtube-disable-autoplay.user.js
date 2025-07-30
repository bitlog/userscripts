// ==UserScript==
// @name	youtube-disable-autoplay
// @description	disable youtube auto-play
// @version	2025.07.30.1
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-disable-autoplay.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-disable-autoplay.user.js
// @match	*://*.youtube.com/*
// @run-at	document-start
// @grant	bitlogStyle
// ==/UserScript==

const autoplayButton = () => document.querySelector('.ytp-autonav-toggle-button')
const initializeAutoplayDisabler = () => {
	if (!location.pathname.startsWith('/watch')) return
	if (!autoplayButton()) { return setTimeout(() => { initializeAutoplayDisabler() }, 1000) }
	fightAutoplay()
}
const fightAutoplay = () => {
	setTimeout(() => {
		if (autoplayButton().getAttribute('aria-checked') === 'true') { autoplayButton().click() }
		fightAutoplay()
	}, 500)
}

