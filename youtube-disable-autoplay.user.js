// ==UserScript==
// @name	youtube-disable-autoplay
// @description	disable youtube auto-play
// @version	2025.07.30.2
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-disable-autoplay.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-disable-autoplay.user.js
// @match	*://*.youtube.com/*
// @run-at	document-end
// @grant	bitlogStyle
// ==/UserScript==

const Attempts_To_Turn_Off = 10;
(function() {
	'use strict';
	let autoplayToggle = document.getElementsByClassName('ytp-autonav-toggle-button')[0];
	let attempts = 1;

	let checkInterval = setInterval(function() {
		function turnAutoplayOff() {
			if (autoplayToggle.getAttribute('aria-checked') === "true" && attempts < Attempts_To_Turn_Off) {
				autoplayToggle.click();
			}
			else {
				clearInterval(checkInterval);
			}
		}
		turnAutoplayOff();
		attempts ++;
	}, 200);
})();
