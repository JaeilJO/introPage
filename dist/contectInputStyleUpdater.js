"use strict";

var contectSection = document.getElementById('contect');
if (contectSection) {
  /**
   * Input Event
   */
  contectSection.querySelectorAll('input').forEach(function (input) {
    input.addEventListener('input', function (e) {
      var target = e.target;
      if (target) {
        var value = target.value;
        if (value) {
          input.style.border = '1px solid #dfba37';
        } else {
          input.style.border = '1px solid #5b5b5b';
        }
      }
    });
  });

  /**
   * Text Area Event
   */
  var textarea = contectSection.querySelector('textarea');
  if (textarea) {
    textarea.addEventListener('input', function (e) {
      var target = e.target;
      if (target) {
        var value = target.value;
        if (value) {
          textarea.style.border = '1px solid #dfba37';
        } else {
          textarea.style.border = '1px solid #5b5b5b';
        }
      }
    });
  }
}