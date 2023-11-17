"use strict";
function viewportHeightCalculator() {
    //1vh를 구하는 것
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
viewportHeightCalculator();
window.addEventListener('resize', viewportHeightCalculator);
