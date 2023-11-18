"use strict";

var hamburgerbutton = document.querySelector('.hamburger-button');
var hamburgerMenu = document.querySelector('.hamburger--menu');
var hamburgerAnchors = document.querySelectorAll('.hamburger--menu--navigation-anchor');
if (hamburgerbutton) {
  hamburgerbutton.addEventListener('click', function () {
    hamburgerbutton.querySelectorAll('.hamburger-bar').forEach(function (bar) {
      var hamburgerButtonStatus = bar.classList.contains('close');
      if (hamburgerMenu) {
        if (hamburgerButtonStatus) {
          bar.classList.remove('close');
          hamburgerMenu.classList.add('close');
        } else {
          bar.classList.add('close');
          hamburgerMenu.classList.remove('close');
        }
      }
    });
  });
  hamburgerAnchors.forEach(function (anchor) {
    anchor.addEventListener('click', function () {
      hamburgerbutton.querySelectorAll('.hamburger-bar').forEach(function (bar) {
        bar.classList.remove('close');
        if (hamburgerMenu) {
          hamburgerMenu.classList.add('close');
        }
      });
    });
  });
}