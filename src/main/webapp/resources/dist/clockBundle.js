/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
function clock() {
  var now = new Date();
  var hours = now.getHours().toString().padStart(2, '0');
  var minutes = now.getMinutes().toString().padStart(2, '0');
  var seconds = now.getSeconds().toString().padStart(2, '0');
  var date = now.toLocaleDateString(); // Получаем текущую дату

  document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds + '<br>' + date;
}

// Update the clock immediately
clock();

// Update the clock every 12 seconds
setInterval(clock, 12000);
/******/ })()
;