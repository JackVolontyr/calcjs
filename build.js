var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var Desk = __webpack_require__(3);
	
	if (true) {
	  console.log('development!');
	}
	
	// App
	var desk = new Desk({
	  el: document.querySelector('.js-calc')
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Methods = function () {
	  function Methods() {
	    _classCallCheck(this, Methods);
	  }
	
	  _createClass(Methods, [{
	    key: 'getElement',
	    value: function getElement() {
	      return this._el;
	    }
	  }]);
	
	  return Methods;
	}();
	
	module.exports = Methods;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Methods = __webpack_require__(1);
	var Panel = __webpack_require__(8);
	var Output = __webpack_require__(7);
	var Input = __webpack_require__(6);
	var _ = __webpack_require__(9);
	
	// Template
	var template = [{ data: 'option="backspace"', text: 'Backspace' }, { data: 'null', text: '' }, { data: 'option="reset"', text: 'C' }, { data: 'number="7"', text: '7' }, { data: 'number="8"', text: '8' }, { data: 'number="9"', text: '9' }, { data: 'symbol="÷"', text: '/' }, { data: 'null', text: '' }, { data: 'number="4"', text: '4' }, { data: 'number="5"', text: '5' }, { data: 'number="6"', text: '6' }, { data: 'symbol="x"', text: '*' }, { data: 'null', text: '' }, { data: 'number="1"', text: '1' }, { data: 'number="2"', text: '2' }, { data: 'number="3"', text: '3' }, { data: 'symbol="-"', text: '-' }, { data: 'null', text: '' }, { data: 'number="0"', text: '0' }, { data: 'null', text: '' }, { data: 'symbol="."', text: '.' }, { data: 'symbol="+"', text: '+' }, { data: 'symbol="="', text: '=' }];
	
	var Calc = function (_Methods) {
	  _inherits(Calc, _Methods);
	
	  function Calc(options) {
	    _classCallCheck(this, Calc);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Calc).call(this));
	
	    _this._el = options.el;
	
	    _this._panel = new Panel({
	      el: document.querySelector('.js-calc__top-panel')
	    });
	
	    _this._output = new Output({
	      el: document.querySelector('.js-calc__output')
	    });
	
	    _this._input = new Input({
	      el: document.querySelector('.js-calc__input')
	    });
	
	    _this._operators = ['+', '-', 'x', '÷' //, '√'
	    ];
	    _this._decimalAdded = false;
	    _this._operatorAdded = false;
	
	    // Template
	    _this._template = _.template(document.getElementById('calcBtnTemplate').innerHTML);
	    _this._input.getElement().innerHTML = _this._template({ option: template });
	
	    // Input
	    _this._input.getElement().addEventListener('click', _this._putInput.bind(_this));
	    // Close Calc
	    _this._panel.getElement().addEventListener('click', _this._closeCalcCalc.bind(_this));
	    // Move Calc
	    _this._panel.getElement().addEventListener('mousedown', _this._dndCalcCalc.bind(_this));
	    return _this;
	  }
	
	  _createClass(Calc, [{
	    key: '_putInput',
	    value: function _putInput(e) {
	      e.preventDefault();
	
	      var buttonData = e.target.dataset;
	      if (this._output.getElement().innerHTML === '0') {
	        this._output.getElement().innerHTML = '';
	      }
	
	      if (buttonData.number) {
	        this._operatorAdded = false;
	        this._renderOutput(buttonData.number);
	      } else if (buttonData.symbol) {
	        this._addSymbol(buttonData.symbol);
	      } else if (buttonData.option) {
	        switch (buttonData.option) {
	          case 'backspace':
	            this._backspace();
	            break;
	          case 'reset':
	            this._renderOutput('0', true);
	            this._decimalAdded = false;
	            break;
	        }
	      }
	    }
	  }, {
	    key: '_renderOutput',
	    value: function _renderOutput() {
	      var value = arguments.length <= 0 || arguments[0] === undefined ? '0' : arguments[0];
	      var render = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	      if (render) {
	        this._output.getElement().innerHTML = value;
	        return;
	      }
	      this._output.getElement().innerHTML += value;
	    }
	  }, {
	    key: '_addSymbol',
	    value: function _addSymbol(symbol) {
	      switch (symbol) {
	        case '=':
	          this._operatorAdded = false;
	          return this._toTotal();
	
	        case '.':
	          if (!this._decimalAdded) {
	            this._decimalAdded = true;
	            this._operatorAdded = false;
	            return this._renderOutput(symbol);
	          }
	          return;
	      }
	
	      if (this._operatorAdded) {
	        this._backspace();
	      }
	      this._decimalAdded = false;
	      this._operatorAdded = true;
	      this._renderOutput(symbol);
	    }
	  }, {
	    key: '_toTotal',
	    value: function _toTotal() {
	      var equation = this._output.getElement().innerHTML;
	      var lastChar = equation[equation.length - 1];
	
	      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
	
	      if (this._operators.indexOf(lastChar) > -1 || lastChar == '.') {
	        equation = equation.replace('dote', '');
	      }
	
	      if (equation) {
	        this._renderOutput(eval(equation), true);
	        this._decimalAdded = false;
	      }
	    }
	  }, {
	    key: '_backspace',
	    value: function _backspace() {
	      var outputNow = this._output.getElement().innerHTML;
	
	      if (outputNow.length <= 1) {
	        this._output.getElement().innerHTML = '0';
	        return;
	      }
	      this._output.getElement().innerHTML = outputNow.slice(0, -1);
	    }
	
	    // Close Calc
	
	  }, {
	    key: '_closeCalcCalc',
	    value: function _closeCalcCalc(e) {
	      if (e.target.closest('.js-calc__top-button--close')) {
	        var customEvent = new CustomEvent('closeCalcCalc');
	        this._el.dispatchEvent(customEvent);
	      }
	    }
	
	    // Move Calc
	
	  }, {
	    key: '_dndCalcCalc',
	    value: function _dndCalcCalc(e) {
	      var customEvent = new CustomEvent('dndCalcCalc', {
	        detail: e
	      });
	      this._el.dispatchEvent(customEvent);
	    }
	  }]);
	
	  return Calc;
	}(Methods);
	
	module.exports = Calc;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var dragNdrop = __webpack_require__(4);
	var Methods = __webpack_require__(1);
	var Calc = __webpack_require__(2);
	var Icon = __webpack_require__(5);
	
	var Desk = function (_Methods) {
	  _inherits(Desk, _Methods);
	
	  function Desk(options) {
	    _classCallCheck(this, Desk);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Desk).call(this));
	
	    _this._el = options.el;
	
	    _this._calc = new Calc({
	      el: document.querySelector('.js-calc__calc')
	    });
	
	    _this._icon = new Icon({
	      el: document.querySelector('.js-calc__icon')
	    });
	
	    // Open Calc
	    _this._icon.getElement().addEventListener('dblclick', _this._openCalc.bind(_this));
	    // DnD Icon
	    _this._icon.getElement().addEventListener('mousedown', _this._dndIcon.bind(_this));
	    // DnD Calc
	    _this._calc.getElement().addEventListener('dndCalcCalc', _this._dndCalc.bind(_this));
	    // Close Calc
	    _this._calc.getElement().addEventListener('closeCalcCalc', _this._closeCalc.bind(_this));
	    return _this;
	  }
	
	  // Open Calc
	
	
	  _createClass(Desk, [{
	    key: '_openCalc',
	    value: function _openCalc(e) {
	      this._calc.getElement().hidden = false;
	    }
	
	    // DnD Icon
	
	  }, {
	    key: '_dndIcon',
	    value: function _dndIcon(e) {
	      var dndoptions = {
	        elem: this._icon.getElement(),
	        parent: this.getElement(),
	        ifTarget: function ifTarget(target) {
	          if (!target.closest('.js-calc__icon')) {
	            return;
	          }
	        }
	      };
	
	      dragNdrop(e, dndoptions);
	    }
	
	    // DnD Calc
	
	  }, {
	    key: '_dndCalc',
	    value: function _dndCalc(e) {
	      var dndoptions = {
	        elem: this._calc.getElement(),
	        parent: this.getElement(),
	        ifTarget: function ifTarget(target) {
	          if (target.closest('.js-calc__top-button') || !target.closest('.js-calc__top-panel')) {
	            return;
	          }
	        }
	      };
	
	      dragNdrop(e.detail, dndoptions);
	    }
	
	    // Close Calc
	
	  }, {
	    key: '_closeCalc',
	    value: function _closeCalc() {
	      this._calc.getElement().hidden = true;
	    }
	  }]);
	
	  return Desk;
	}(Methods);
	
	module.exports = Desk;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	// Drag N Drop
	
	function dragNdrop(e, options) {
	  e.preventDefault();
	
	  var elem = options.elem;
	  var parent = options.parent;
	  var finterFunc = options.ifTarget;
	
	  var target = e.target;
	  finterFunc(target);
	
	  var coords = getCoords(elem);
	  var shiftX = e.pageX - coords.left;
	  var shiftY = e.pageY - coords.top;
	
	  elem.style.position = 'absolute';
	  // elem.style.zIndex = 1000;
	  document.body.appendChild(elem);
	  moveAt(e);
	
	  function moveAt(e) {
	    var positionLeft = e.pageX - shiftX;
	    var positionTop = e.pageY - shiftY;
	    var deskRectW = parent.getBoundingClientRect().width;
	    var deskRectH = parent.getBoundingClientRect().height;
	    var elemRectW = elem.getBoundingClientRect().width;
	    var elemRectH = elem.getBoundingClientRect().height;
	
	    if (positionTop <= 0) {
	      positionTop = 0;
	    } else if (positionTop + elemRectH >= deskRectH) {
	      positionTop = deskRectH - elemRectH;
	    }
	    if (positionLeft <= 0) {
	      positionLeft = 0;
	    } else if (positionLeft + elemRectW >= deskRectW) {
	      positionLeft = deskRectW - elemRectW;
	    }
	
	    elem.style.cursor = 'move';
	    elem.style.left = positionLeft + 'px';
	    elem.style.top = positionTop + 'px';
	  }
	
	  document.onmousemove = function (e) {
	    moveAt(e);
	  };
	  // document.addEventListener('mousemove', wrapMoveAt);
	  // function wrapMoveAt(e) {
	  //   return moveAt(e);
	  // };
	
	  document.addEventListener('mouseup', stopMove);
	  function stopMove(e) {
	    elem.style.cursor = '';
	    document.onmousemove = document.onmouseup = null;
	  };
	}
	
	function getCoords(elem) {
	  var box = elem.getBoundingClientRect();
	  return {
	    top: box.top + pageYOffset,
	    left: box.left + pageXOffset
	  };
	}
	
	module.exports = dragNdrop;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Methods = __webpack_require__(1);
	
	var Icon = function (_Methods) {
	  _inherits(Icon, _Methods);
	
	  function Icon(options) {
	    _classCallCheck(this, Icon);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Icon).call(this));
	
	    _this._el = options.el;
	    return _this;
	  }
	
	  return Icon;
	}(Methods);
	
	module.exports = Icon;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Methods = __webpack_require__(1);
	
	var Input = function (_Methods) {
	  _inherits(Input, _Methods);
	
	  function Input(options) {
	    _classCallCheck(this, Input);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Input).call(this));
	
	    _this._el = options.el;
	    return _this;
	  }
	
	  return Input;
	}(Methods);
	
	module.exports = Input;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Methods = __webpack_require__(1);
	
	var Output = function (_Methods) {
	  _inherits(Output, _Methods);
	
	  function Output(options) {
	    _classCallCheck(this, Output);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Output).call(this));
	
	    _this._el = options.el;
	    return _this;
	  }
	
	  return Output;
	}(Methods);
	
	module.exports = Output;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Methods = __webpack_require__(1);
	
	var Panel = function (_Methods) {
	  _inherits(Panel, _Methods);
	
	  function Panel(options) {
	    _classCallCheck(this, Panel);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Panel).call(this));
	
	    _this._el = options.el;
	    return _this;
	  }
	
	  return Panel;
	}(Methods);
	
	module.exports = Panel;

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = _;

/***/ }
/******/ ]);
//# sourceMappingURL=build.js.map