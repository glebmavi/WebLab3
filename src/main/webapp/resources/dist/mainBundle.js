/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formListener: () => (/* binding */ formListener),
/* harmony export */   handleRChange: () => (/* binding */ handleRChange)
/* harmony export */ });
/* harmony import */ var _drawer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _drawFromTable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);


var svgWidth = 400;
var svgHeight = 400;
var translations = {
  "en": {
    "selectR": "Select R first"
  },
  "ru": {
    "selectR": "Сначала выберите R"
  },
  "es": {
    "selectR": "Seleccione R primero"
  }
};
function formListener(locale) {
  var rInputElement = document.getElementById('svgForm:hiddenSvgR');
  var svgGraph = document.getElementById('svgGraph');
  var hiddenX = document.getElementById('svgForm:hiddenSvgX');
  var hiddenY = document.getElementById('svgForm:hiddenSvgY');
  var xText = document.getElementById("svgX");
  var yText = document.getElementById("svgY");
  var x, y;
  svgGraph.onmousemove = function (event) {
    var rMessage = document.getElementById("svgForm:RMessage");
    rMessage.innerHTML = "";
    if (rInputElement.value !== "") {
      x = (event.offsetX - svgWidth / 2) / (svgWidth * (3 / 10) / rInputElement.value);
      y = (event.offsetY - svgHeight / 2) / (svgHeight * (-3 / 10) / rInputElement.value);
      hiddenX.value = x.toFixed(3);
      hiddenY.value = y.toFixed(3);
      xText.innerHTML = "X= " + x.toFixed(3);
      yText.innerHTML = "Y= " + y.toFixed(3);
    } else {
      rMessage.innerHTML = translations[locale].selectR;
    }
  };
  svgGraph.addEventListener('click', function (event) {
    document.getElementById('svgForm:svgFormButton').click();
  });
}
function handleRChange() {
  var RText = document.getElementsByClassName("RText");
  var RHalfText = document.getElementsByClassName("RHalfText");
  var MinusRHalfText = document.getElementsByClassName("MinusRHalfText");
  var MinusRText = document.getElementsByClassName("MinusRText");
  var rInputElement = document.getElementById('svgForm:hiddenSvgR');
  rInputElement.addEventListener("valueChange", function () {
    var rMessage = document.getElementById("svgForm:RMessage");
    rMessage.innerHTML = "";
    (0,_drawer_js__WEBPACK_IMPORTED_MODULE_0__.drawR)(rInputElement.value, RText, RHalfText, MinusRHalfText, MinusRText);
    (0,_drawer_js__WEBPACK_IMPORTED_MODULE_0__.removePoints)();
    (0,_drawFromTable_js__WEBPACK_IMPORTED_MODULE_1__.drawFromTable)();
  });
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawPoint: () => (/* binding */ drawPoint),
/* harmony export */   drawR: () => (/* binding */ drawR),
/* harmony export */   removePoints: () => (/* binding */ removePoints)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function drawR(R, RText, RHalfText, MinusRHalfText, MinusRText) {
  var _iterator = _createForOfIteratorHelper(RText),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var textElement = _step.value;
      textElement.innerHTML = R.toString();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  var _iterator2 = _createForOfIteratorHelper(RHalfText),
    _step2;
  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _textElement = _step2.value;
      _textElement.innerHTML = (R / 2).toString();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
  var _iterator3 = _createForOfIteratorHelper(MinusRHalfText),
    _step3;
  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _textElement2 = _step3.value;
      _textElement2.innerHTML = (-R / 2).toString();
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
  var _iterator4 = _createForOfIteratorHelper(MinusRText),
    _step4;
  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var _textElement3 = _step4.value;
      _textElement3.innerHTML = (-R).toString();
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
}
function drawPoint(X, Y, R, svgGraph, isHit) {
  var multiplier = 6 / R;
  var newPoint = document.createElementNS("http://www.w3.org/2000/svg", 'use');
  newPoint.setAttribute("x", (X * multiplier).toString());
  newPoint.setAttribute("y", (Y * -multiplier).toString());
  newPoint.setAttribute("href", "#circle");
  newPoint.setAttribute("class", "usedCircle");
  if (isHit === "true") {
    newPoint.setAttribute("fill", "green");
  } else if (isHit === "false") {
    newPoint.setAttribute("fill", "red");
  }
  svgGraph.append(newPoint);
}
function removePoints() {
  var useElements = document.querySelectorAll("svg use.usedCircle");
  useElements.forEach(function (useElement) {
    useElement.remove();
  });
}


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawFromTable: () => (/* binding */ drawFromTable)
/* harmony export */ });
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);

function drawFromTable() {
  var RText = document.getElementsByClassName("RText");
  var RHalfText = document.getElementsByClassName("RHalfText");
  var MinusRHalfText = document.getElementsByClassName("MinusRHalfText");
  var MinusRText = document.getElementsByClassName("MinusRText");
  var svgGraph = document.getElementById("svgGraph");
  var xValues = document.getElementsByClassName("xTableData");
  var yValues = document.getElementsByClassName("yTableData");
  var rValues = document.getElementsByClassName("rTableData");
  var hitValues = document.getElementsByClassName("isHitTableData");
  var rInput = document.getElementById('svgForm:hiddenSvgR');
  var rValue;
  if (rInput.value === "" && rValues.length !== 0) {
    rValue = rValues[0].innerHTML;
  } else if (rInput.value !== "") {
    rValue = rInput.value;
  } else {
    return;
  }
  (0,_drawer__WEBPACK_IMPORTED_MODULE_0__.drawR)(rValue, RText, RHalfText, MinusRHalfText, MinusRText);
  for (var i = 0; i < xValues.length; i++) {
    if (rValues[i].innerHTML === rValue) {
      (0,_drawer__WEBPACK_IMPORTED_MODULE_0__.drawPoint)(xValues[i].innerHTML, yValues[i].innerHTML, rValue, svgGraph, hitValues[i].innerHTML);
    }
  }
}


/***/ }),
/* 4 */
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
/* 5 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localeManager: () => (/* binding */ localeManager)
/* harmony export */ });
function localeManager() {
  var localeButton = document.getElementById("toggleLocale");
  var localeSelect = document.getElementById("localeSelect");
  localeButton.addEventListener("click", function () {
    if (localeSelect.style.display === "block") {
      localeSelect.style.display = "none";
    } else {
      localeSelect.style.display = "block";
    }
  });
}


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertToUserTimeZone: () => (/* binding */ convertToUserTimeZone)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function convertToUserTimeZone(locale) {
  var dates = document.getElementsByClassName("tableDateTime");
  var _iterator = _createForOfIteratorHelper(dates),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var dateElement = _step.value;
      var dateString = dateElement.innerHTML;
      var parts = dateString.split(/[ .:]/);

      // Note: months are 0-indexed in JavaScript Date object, so we subtract 1 from the month
      var originalDate = new Date(Date.UTC(parts[2], parts[1] - 1, parts[0], parts[3], parts[4], parts[5]));
      dateElement.innerHTML = originalDate.toLocaleString(locale, {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "shortOffset"
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
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
/* harmony import */ var _resources_js_variablesVerification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _resources_js_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _resources_js_locale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _resources_js_drawFromTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _resources_js_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);





document.addEventListener('DOMContentLoaded', function () {
  (0,_resources_js_theme__WEBPACK_IMPORTED_MODULE_1__.loadTheme)();
  (0,_resources_js_locale__WEBPACK_IMPORTED_MODULE_2__.localeManager)();
  var locale = document.documentElement.lang;
  (0,_resources_js_timezone__WEBPACK_IMPORTED_MODULE_4__.convertToUserTimeZone)(locale);
  (0,_resources_js_variablesVerification__WEBPACK_IMPORTED_MODULE_0__.formListener)(locale);
  (0,_resources_js_variablesVerification__WEBPACK_IMPORTED_MODULE_0__.handleRChange)();
  (0,_resources_js_drawFromTable__WEBPACK_IMPORTED_MODULE_3__.drawFromTable)();
});
})();

/******/ })()
;