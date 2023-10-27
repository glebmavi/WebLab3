/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadTheme: () => (/* binding */ loadTheme)
/* harmony export */ });
function setTheme(theme) {
  var html = document.querySelector('html');
  var toggleThemeButton = document.querySelector('#toggleTheme');
  var toggleLocaleButton = document.querySelector('#toggleLocale');
  if (theme === "theme-dark") {
    html.dataset.theme = "theme-dark";
    toggleThemeButton.innerHTML = "<img src=\"assets/sun-svgrepo-com.svg\" alt=\"SVG Image\">";
    if (toggleLocaleButton) toggleLocaleButton.innerHTML = "<img src=\"assets/language-dark.svg\" alt=\"SVG Image\">";
  } else {
    html.dataset.theme = "theme-light";
    toggleThemeButton.innerHTML = "<img src=\"assets/moon-svgrepo-com.svg\" alt=\"SVG Image\">";
    if (toggleLocaleButton) toggleLocaleButton.innerHTML = "<img src=\"assets/language-light.svg\" alt=\"SVG Image\">";
  }
  localStorage.setItem('theme', html.dataset.theme);
}
function themeListener() {
  var toggleButton = document.querySelector('#toggleTheme');
  toggleButton.addEventListener('click', function () {
    if (localStorage.getItem('theme') === "theme-light") {
      setTheme("theme-dark");
    } else {
      setTheme("theme-light");
    }
  });
}
function getOSDefaultTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme("theme-dark");
  } else {
    setTheme("theme-light");
  }
}
function loadTheme() {
  var theme = localStorage.getItem('theme');
  themeListener();
  if (theme) {
    setTheme(theme);
  } else {
    getOSDefaultTheme();
  }
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localeManager: () => (/* binding */ localeManager)
/* harmony export */ });
function localeManager(locale) {
  if (document.querySelector('html').lang !== locale) {
    setLocale(locale);
  }
  var localeButton = document.getElementById("toggleLocale");
  var localeSelect = document.getElementById("localeSelect");
  localeButton.addEventListener("click", function () {
    if (localeSelect.style.display === "block") {
      localeSelect.style.display = "none";
    } else {
      localeSelect.style.display = "block";
    }
  });
  var options = localeSelect.children;
  var _loop = function _loop(i) {
    options[i].addEventListener("click", function () {
      if (options[i].id !== locale) {
        setLocale(options[i].id);
      }
    });
  };
  for (var i = 0; i < options.length; i++) {
    _loop(i);
  }
}
function setLocale(locale) {
  document.querySelector('html').lang = locale;
  localStorage.setItem('locale', locale);
  document.location.href = "?sessionLocale=" + locale;
}


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _js_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


document.addEventListener('DOMContentLoaded', function () {
  (0,_js_theme__WEBPACK_IMPORTED_MODULE_0__.loadTheme)();
  var locale = localStorage.getItem('locale') || 'en';
  (0,_js_locale__WEBPACK_IMPORTED_MODULE_1__.localeManager)(locale);
});
})();

/******/ })()
;