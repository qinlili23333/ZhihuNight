// ==UserScript==
// @name        熬夜刷知乎
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  自动开启知乎的原生夜间模式
// @author       琴梨梨
// @match        https://*.zhihu.com/*
// @grant        none
// @run-at document-idle
// ==/UserScript==

(function() {
    'use strict';

    if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
        document.getElementsByTagName("html")[0].setAttribute("data-theme","dark");
    }
})();
