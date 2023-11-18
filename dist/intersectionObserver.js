"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Observer = /*#__PURE__*/function () {
  function Observer(element, callback, threshold) {
    _classCallCheck(this, Observer);
    _defineProperty(this, "element", void 0);
    _defineProperty(this, "callback", void 0);
    _defineProperty(this, "threshold", void 0);
    if (typeof element === 'string') {
      this.element = document.querySelector(element);
    } else {
      this.element = element;
    }
    this.callback = callback;
    this.threshold = threshold;
  }
  _createClass(Observer, [{
    key: "createObserver",
    value: function createObserver() {
      var _this = this;
      //element가 없을경우
      if (!this.element) {
        return new Error('element를 입력해야합니다');
      }
      var options = {
        threshold: this.threshold
      };
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var target = entry.target;
          if (entry.isIntersecting) {
            _this.callback(target);
          }
        }, options);
      });
      observer.observe(this.element);
    }
  }]);
  return Observer;
}();
/**
 * Main Observer
 */
// * Main CallBack Function
var mainCallback = function mainCallback(element) {
  /**
   * Lottie Player 공식 github에서 TypeScript의 경우 lottieplayer를 any로 두라고 하고있음
   * https://github.com/LottieFiles/lottie-player
      - 위 링크의 Typescript ReactJS 부분 참조
   */
  var lottiePlayer = element.querySelector('.main-animation');
  if (lottiePlayer) {
    lottiePlayer.play();
  }
};
var mainObserver = new Observer('#main', mainCallback, 0.6);
mainObserver.createObserver();

/**
 * Project Observer
 */

// * Project CallBack Function
var projectCallBack = function projectCallBack(element) {
  var projectImage = element.querySelector('.project-section-contents--item--image');
  if (projectImage) {
    projectImage.classList.remove('not-show');
  }
};
var projectObserver = new Observer('#project', projectCallBack, 0.6);
projectObserver.createObserver();

/**
 * Skills Observer
 */

// * Skills CallBack Function
var skillsCallBack = function skillsCallBack(element) {
  var listItem = element;
  listItem.classList.remove('not-show');
};
var skills = document.querySelectorAll('.skills-list__item');
skills.forEach(function (skill) {
  var observer = new Observer(skill, skillsCallBack, 1);
  observer.createObserver();
});

/**
 * About Observer
 */

// * About CallBack Function
var aboutCallback = function aboutCallback(element) {
  var aboutItme = element;
  aboutItme.classList.remove('not-show');
};
var aboutItems = document.querySelectorAll('.about-section-contents--item');
aboutItems.forEach(function (about) {
  var observer = new Observer(about, aboutCallback, 1);
  observer.createObserver();
});