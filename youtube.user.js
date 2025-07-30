// ==UserScript==
// @name	youtube
// @description	youtube userscript, including youtube shorts redirect and auto-play disable
// @version	2025.07.30.3
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube.user.js
// @match	*://*.youtube.com/*
// @run-at	document-start
// @grant	bitlogStyle
// ==/UserScript==

var oldHref = document.location.href;
if (window.location.href.indexOf('youtube.com/shorts') > -1) {
	window.location.replace(window.location.toString().replace('/shorts/', '/watch?v='));
}
window.onload = function() {
	var bodyList = document.querySelector("body")
	var observer = new MutationObserver(function(mutations) {
		mutations.forEach(function(mutation) {
			if (oldHref != document.location.href) {
				oldHref = document.location.href;
				if (window.location.href.indexOf('youtube.com/shorts') > -1) {
					window.location.replace(window.location.toString().replace('/shorts/', '/watch?v='));
				}
			}
		});
	});
	var config = {
		childList: true,
		subtree: true
	};
	observer.observe(bodyList, config);
};

function() {
	'use strict';
	function toggleAutoplayIfOn() {
		let autoplayButton = document.getElementsByClassName('ytm-autonav-toggle-button-container')[0];
		let autoplayEnabled = autoplayButton && autoplayButton.getAttribute('aria-pressed') === 'true';
		if (autoplayEnabled) {
			autoplayButton.click();
		}
	}
	toggleAutoplayIfOn();
	setInterval(toggleAutoplayIfOn, 10000);
})();
