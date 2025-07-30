// ==UserScript==
// @name	youtube-disable-autoplay
// @description	disable youtube auto-play
// @version	2025.07.30.3
// @author	bitlog
// @namespace	bitlogUserscripts
// @downloadURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-disable-autoplay.user.js
// @updateURL	https://raw.githubusercontent.com/bitlog/userscripts/refs/heads/main/youtube-disable-autoplay.user.js
// @match	*://*.youtube.com/*
// @run-at	document-end
// @grant	bitlogStyle
// ==/UserScript==

function eachNode(rootNode, callback) {
	if (!callback) {
		const nodes = [];
		eachNode(rootNode, function (node) {
			nodes.push(node);
		});
		return nodes;
	}

	if (false === callback(rootNode)) {
		return false;
	}

	if (rootNode.hasChildNodes()) {
		const nodes = rootNode.childNodes;
		for (let i = 0, l = nodes.length; i < l; ++i) {
			if (false === eachNode(nodes[i], callback)) {
				return;
			}
		}
	}
}

(function () {
	"use strict";

	const observer = new MutationObserver(function (mutationList) {
		for (const mutation of mutationList) {
			for (const addedNode of mutation.addedNodes) {
				// recurses through all child nodes as well
				eachNode(addedNode, function (node) {
					node.nodeName.toLowerCase() == "div" &&
					node.classList.contains("ytp-autonav-toggle-button") &&
					node.getAttribute("aria-checked") == "true" &&
					node.click();
				});
			}
		}
	});

	observer.observe(document, {
		childList: true,
		subtree: true,
		attributes: true,
	});
})();
