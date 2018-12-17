module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cleanOptions = cleanOptions;
exports.getHighlightText = getHighlightText;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cleanOptions(options) {
    var res = [];
    var keysSet = new Set();
    for (var idx in options) {
        var option = options[idx];
        if (keysSet.has(option.value)) {
            continue;
        }
        keysSet.add(option.value);
        res.push(option);
    }
    return res;
}

function getHighlightText(text, keyword) {
    var ignoreCase = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var i = void 0,
        k = void 0;
    if (!ignoreCase) {
        k = keyword;
        i = text.search(k);
    } else {
        k = keyword.toLowerCase();
        i = text.toLowerCase().search(k);
    }
    if (!k) {
        return _react2.default.createElement(
            'p',
            null,
            text
        );
    }
    if (i < 0) {
        return _react2.default.createElement(
            'p',
            null,
            text
        );
    }
    var prev = text.substr(0, i);
    var key = text.substr(i, k.length);
    var post = text.substr(i + k.length, text.length - k.length);
    return _react2.default.createElement(
        'p',
        null,
        prev,
        _react2.default.createElement(
            'mark',
            { className: 'text_highlight' },
            key
        ),
        post
    );
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(4);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
		var newContent = require("!!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/lib/loader.js!./index.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(1);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactPagingSearch = function (_React$Component) {
  _inherits(ReactPagingSearch, _React$Component);

  function ReactPagingSearch(props) {
    _classCallCheck(this, ReactPagingSearch);

    var _this = _possibleConstructorReturn(this, (ReactPagingSearch.__proto__ || Object.getPrototypeOf(ReactPagingSearch)).call(this, props));

    _this.state = {
      focus: false,
      page: 1,
      keyword: '',
      options: [],
      mouseOvering: false,
      cursor: -1
    };
    _this.handleOnScroll = _this.handleOnScroll.bind(_this);
    _this.onKeywordChange = _this.onKeywordChange.bind(_this);
    _this.onSelectOption = _this.onSelectOption.bind(_this);
    return _this;
  }

  _createClass(ReactPagingSearch, [{
    key: 'toggleResultDropDown',
    value: function toggleResultDropDown(value) {
      this.setState({ focus: value });
    }
  }, {
    key: 'getOptions',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(keyword, curPage) {
        var triedTimes, _ref2, options, page, success, newPage, newOptions, newCursor;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                triedTimes = 0;

              case 1:
                if (!(triedTimes < 3)) {
                  _context.next = 21;
                  break;
                }

                _context.next = 4;
                return this.props.getOptions(keyword, curPage);

              case 4:
                _ref2 = _context.sent;
                options = _ref2.options;
                page = _ref2.page;
                success = _ref2.success;

                if (success) {
                  _context.next = 11;
                  break;
                }

                triedTimes = triedTimes + 1;
                return _context.abrupt('continue', 1);

              case 11:
                newPage = page;

                if (!options) {
                  options = [];
                }
                if (options.length > 0) {
                  newPage = newPage + 1;
                }
                newOptions = page > 1 ? [].concat(_toConsumableArray(this.state.options), _toConsumableArray(options)) : [].concat(_toConsumableArray(options));
                newCursor = this.state.cursor;

                if (page == 1) {
                  //reset cursor
                  newCursor = -1;
                  this.cursorRef = null;
                }
                this.setState({
                  keyword: keyword,
                  page: newPage,
                  options: (0, _utils.cleanOptions)(newOptions),
                  cursor: newCursor
                });
                return _context.abrupt('break', 21);

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getOptions(_x, _x2) {
        return _ref.apply(this, arguments);
      }

      return getOptions;
    }()
  }, {
    key: 'changeKeyword',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(keyword) {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.debouceSearchTimeout) {
                  clearTimeout(this.debouceSearchTimeout);
                }
                this.debouceSearchTimeout = setTimeout(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return _this2.getOptions(keyword, 1);

                        case 2:
                          _this2.resultUlContainerRef.scrollTop = 0;

                        case 3:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this2);
                })), 200);

              case 2:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function changeKeyword(_x3) {
        return _ref3.apply(this, arguments);
      }

      return changeKeyword;
    }()
  }, {
    key: 'onKeywordChange',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(e) {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                e.persist();
                _context4.next = 3;
                return this.changeKeyword(e.target.value);

              case 3:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function onKeywordChange(_x4) {
        return _ref5.apply(this, arguments);
      }

      return onKeywordChange;
    }()
  }, {
    key: 'handleOnScroll',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {
        var offset;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!this.loading) {
                  _context5.next = 2;
                  break;
                }

                return _context5.abrupt('return');

              case 2:
                offset = e.target.scrollTop + this.resultUlContainerRef.clientHeight;

                if (!(Math.abs(offset - this.resultUlRef.clientHeight) <= 10)) {
                  _context5.next = 8;
                  break;
                }

                this.loading = true;
                _context5.next = 7;
                return this.getOptions(this.state.keyword, this.state.page);

              case 7:
                this.loading = false;

              case 8:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function handleOnScroll(_x5) {
        return _ref6.apply(this, arguments);
      }

      return handleOnScroll;
    }()
  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(e) {
      var _state = this.state,
          cursor = _state.cursor,
          options = _state.options;
      // arrow up/down button should select next/previous list element

      if (e.keyCode === 38 && cursor > 0) {
        // key Up
        this.setState({ cursor: this.state.cursor - 1 });
        this.changedCursor = true;
      } else if (e.keyCode === 40 && cursor < options.length - 1) {
        // key Down
        this.setState({ cursor: this.state.cursor + 1 });
        this.changedCursor = true;
      } else if (e.keyCode === 13 && 0 <= cursor && cursor < options.length) {
        // key Enter
        this.onSelectOption(options[cursor]);
      }
    }
  }, {
    key: 'onSelectOption',
    value: function onSelectOption(option) {
      if (this.props.onSelectOption) {
        this.props.onSelectOption(option);
      }
      this.onMouseOver(false);
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver(value, cursor) {
      var newState = {};
      if (value != this.state.mouseOvering) {
        newState.mouseOvering = value;
      }
      if (value) {
        if (cursor != this.state.cursor) {
          newState.cursor = cursor;
        }
      }
      this.setState(newState);
    }
  }, {
    key: 'onClickClearIcon',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.changeKeyword('');

              case 2:
                this.inputRef.value = '';

              case 3:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function onClickClearIcon() {
        return _ref7.apply(this, arguments);
      }

      return onClickClearIcon;
    }()
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { className: 'react-paging-search full-parent' + (this.state.focus || this.state.mouseOvering ? ' open' : ' close') },
        this.renderInput(),
        this.renderResult()
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _this3 = this;

      return _react2.default.createElement(
        'span',
        { className: 'input-container full-parent flex' + (this.state.focus ? ' focus' : '') },
        this.renderLeftIcon(this.state),
        _react2.default.createElement('input', { className: 'full-parent',
          ref: function ref(_ref8) {
            return _this3.inputRef = _ref8;
          },
          onKeyDown: function onKeyDown(e) {
            return _this3.handleKeyDown(e);
          },
          onChange: this.onKeywordChange,
          onFocus: function onFocus(_) {
            return _this3.toggleResultDropDown(true);
          },
          onBlur: function onBlur(_) {
            return _this3.toggleResultDropDown(false);
          },
          placeholder: this.props.placeholder }),
        this.renderClearIcon(this.state),
        this.renderRightIcon(this.state)
      );
    }
  }, {
    key: 'renderLeftIcon',
    value: function renderLeftIcon(state) {
      return _react2.default.createElement(
        'span',
        { className: 'svg-container' },
        this.props.renderLeftIcon ? this.props.renderLeftIcon(state) : null
      );
    }
  }, {
    key: 'renderClearIcon',
    value: function renderClearIcon(state) {
      var _this4 = this;

      return _react2.default.createElement(
        'span',
        { className: 'svg-container' },
        _react2.default.createElement(
          'svg',
          { version: '1.1', viewBox: '0 0 357 357', className: 'close', onClick: function onClick(_) {
              return _this4.onClickClearIcon();
            } },
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement('polygon', { points: '357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3 214.2,178.5', fill: 'rgba(161, 180, 205, 1)' })
            )
          )
        )
      );
    }
  }, {
    key: 'renderRightIcon',
    value: function renderRightIcon(state) {
      return _react2.default.createElement(
        'span',
        { className: 'svg-container' },
        this.props.renderRightIcon ? this.props.renderRightIcon(state) : null
      );
    }
  }, {
    key: 'renderResult',
    value: function renderResult() {
      var _this5 = this;

      return _react2.default.createElement(
        'span',
        { className: 'result-ul-container',
          onScroll: this.handleOnScroll, ref: function ref(_ref10) {
            return _this5.resultUlContainerRef = _ref10;
          } },
        _react2.default.createElement(
          'ul',
          { className: 'result-ul', ref: function ref(_ref9) {
              return _this5.resultUlRef = _ref9;
            } },
          this.state.options.map(function (option, idx) {
            return _this5.renderOption(option, idx);
          })
        )
      );
    }
  }, {
    key: 'renderOption',
    value: function renderOption(option, idx) {
      var _this6 = this;

      return _react2.default.createElement(
        'li',
        { key: option.value,
          className: this.state.cursor == idx ? ' hover' : '',
          ref: function ref(_ref11) {
            if (_this6.state.cursor == idx) {
              _this6.cursorRef = _ref11;
            }
          },
          onClick: function onClick(_) {
            return _this6.onSelectOption(option);
          },
          onMouseOver: function onMouseOver(_) {
            return _this6.onMouseOver(true, idx);
          },
          onMouseLeave: function onMouseLeave(_) {
            return _this6.onMouseOver(false);
          } },
        this.renderOptionContent(option, idx)
      );
    }
  }, {
    key: 'renderOptionContent',
    value: function renderOptionContent(option, idx) {
      return (0, _utils.getHighlightText)(option.label, this.state.keyword, this.props.ignoreCase);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.cursorRef && this.changedCursor) {
        var offset = this.resultUlContainerRef.scrollTop + this.resultUlContainerRef.clientHeight;
        var targetOffset = this.cursorRef.offsetTop + this.cursorRef.clientHeight;
        // if target [this.cursorRef.offsetTop, targetOffset] is out of the 
        //  viewing window [this.resultUlContainerRef.scrollTop, offset]
        var c1 = this.cursorRef.offsetTop < this.resultUlContainerRef.scrollTop;
        var c2 = offset < targetOffset;
        if ((c1 || c2) && !(c1 && c2)) {
          this.cursorRef.scrollIntoView({ behavior: 'smooth' });
        }
        this.changedCursor = false;
      }
    }
  }]);

  return ReactPagingSearch;
}(_react2.default.Component);

exports.default = ReactPagingSearch;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// Module
exports.push([module.i, ".react-paging-search {\n  --border: 1px solid #D4DDE8;\n  --box-shadow: 0 2px 10px 0 rgba(191, 210, 235, 0.3);\n  --transition: 0.1s;\n  --padding: 8px;\n  --background: #E4E9F2;\n  --highlight-color: #37A7FF;\n  position: relative;\n  display: block;\n  /* Track */\n  /* Handle */ }\n  .react-paging-search, .react-paging-search * {\n    transition: var(--transition); }\n  .react-paging-search.full-parent, .react-paging-search .full-parent {\n    width: 100%;\n    height: 100%; }\n  .react-paging-search.open .input-container {\n    box-shadow: var(--box-shadow);\n    z-index: 201; }\n  .react-paging-search.open .result-ul-container {\n    max-height: 300px;\n    box-shadow: var(--box-shadow);\n    -webkit-box-shadow: var(--box-shadow);\n    overflow-y: auto; }\n  .react-paging-search.close .result-ul-container {\n    max-height: 0px;\n    border-top: none;\n    overflow: hidden; }\n  .react-paging-search .flex {\n    display: flex; }\n  .react-paging-search .input-container {\n    border: var(--border);\n    background: var(--background); }\n    .react-paging-search .input-container.focus {\n      background: white; }\n    .react-paging-search .input-container input {\n      background: transparent;\n      outline: none;\n      border: none;\n      margin: 0;\n      padding: 0 0 0 var(--padding); }\n    .react-paging-search .input-container .svg-container {\n      position: relative;\n      display: flex;\n      height: 100%; }\n      .react-paging-search .input-container .svg-container .close {\n        margin: auto 8px auto 0;\n        height: 12px;\n        cursor: pointer; }\n        .react-paging-search .input-container .svg-container .close:active {\n          transform-origin: 50% 50%;\n          transform: rotate(15deg); }\n      .react-paging-search .input-container .svg-container > * {\n        margin-top: auto;\n        margin-bottom: auto; }\n  .react-paging-search .result-ul-container {\n    position: absolute;\n    top: calc(100% + 1px);\n    left: 0;\n    background: white;\n    z-index: 100;\n    width: 100%;\n    transition: max-height var(--transition);\n    -webkit-transition: max-height var(--transition);\n    /* For Safari 3.1 to 6.0 */\n    border: var(--border); }\n    .react-paging-search .result-ul-container ul {\n      margin: 0;\n      padding: 0; }\n    .react-paging-search .result-ul-container li {\n      position: relative;\n      padding: var(--padding);\n      overflow-x: hidden;\n      cursor: pointer;\n      text-align: left;\n      transition: var(--transition); }\n      .react-paging-search .result-ul-container li:hover, .react-paging-search .result-ul-container li.hover {\n        background: var(--background); }\n      .react-paging-search .result-ul-container li:not(:last-child):after {\n        content: \"\";\n        position: absolute;\n        width: calc(100% - 2 * var(--padding));\n        border-bottom: var(--border);\n        bottom: 0;\n        left: var(--padding); }\n      .react-paging-search .result-ul-container li p {\n        display: inline; }\n        .react-paging-search .result-ul-container li p mark {\n          background: transparent;\n          color: var(--highlight-color); }\n  .react-paging-search ::-webkit-scrollbar {\n    width: 4px;\n    /* remove scrollbar space */\n    background: transparent;\n    margin-left: -4px; }\n  .react-paging-search ::-webkit-scrollbar-track {\n    background: transparent;\n    background: rgba(187, 187, 187, 0.3); }\n  .react-paging-search ::-webkit-scrollbar-thumb {\n    background: #BBB; }\n", ""]);



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);