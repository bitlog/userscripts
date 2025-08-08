// ==UserScript==
// @name	youtube-disable-autoplay
// @description	disable youtube auto-play
// @version	2025.08.08.02
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-disable-autoplay.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-disable-autoplay.user.js
// @match	*://*.youtube.com/*
// @run-at	document-end
// @grant	bitlogStyle
// ==/UserScript==

var disableAutoPlay = window.setInterval( function( window ) {
	let button = window.document.querySelector( "button.ytm-autonav-toggle-button-container" ); // get the button
	if ( button.getAttribute( "aria-label" ) == "Auto-play is on" ) {
		button.click( ); // disable autoplay next if enabled
	}
	if ( button.getAttribute( "aria-label" ) == "Auto-play is off" ) {
		window.clearInterval( disableAutoPlay ); // end script once done
	}
}, 1024, window );
