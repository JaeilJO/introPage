"use strict";

function anchorHandler(id) {
  var section = document.querySelector("#".concat(id));
  if (!section) {
    return;
  }
  var absolutePosition = section.getBoundingClientRect().top + window.scrollY;
  var cordination = absolutePosition - 250;
  window.scrollTo({
    top: cordination,
    left: 0,
    behavior: 'smooth'
  });
}