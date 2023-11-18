"use strict";

function viewportHeightCalculator() {
  //1vh를 구하는 것
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
}
viewportHeightCalculator();
window.addEventListener('resize', viewportHeightCalculator);