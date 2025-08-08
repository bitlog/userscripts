// ==UserScript==
// @name	youtube-disable-autoplay
// @description	disable youtube auto-play
// @version	2025.08.08.01
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-disable-autoplay.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-disable-autoplay.user.js
// @match	*://*.youtube.com/*
// @run-at	document-end
// @grant	bitlogStyle
// ==/UserScript==

var var_interval_id = window.setInterval( function( window ) {
	let a = window.document.querySelector( "button.ytp-button[data-tooltip-target-id='ytp-autonav-toggle-button']" ); // get the button
	if ( a.getAttribute( "aria-label" ) == "Autoplay is on" ) {
		a.click( ); // disable autoplay next if enabled
	}
	if ( a.getAttribute( "aria-label" ) == "Autoplay is off" ) {
		window.clearInterval( var_interval_id ); // end script once done
	}
}, 1024, window );
