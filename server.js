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
/******/ 	__webpack_require__.p = "/";
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
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
    _inherits(Menu, _Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
    }

    _createClass(Menu, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var id = document.getElementById("ham_button");
            id.onclick = function () {
                var navs = document.querySelectorAll('.nav_items');
                navs.forEach(function (nav) {
                    nav.classList.toggle('db');
                });
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'menu' },
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'wM dib' },
                        _react2.default.createElement('img', { src: 'vg.jpg', height: '35', width: '35', className: 'profile' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'wM dib' },
                        'Vashisht Gupta',
                        _react2.default.createElement('br', null),
                        'Software Developer'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'wM wM_toggle', id: 'ham_button' },
                    _react2.default.createElement('i', { className: 'fas fa-bars' })
                ),
                _react2.default.createElement(
                    'nav',
                    { className: 'nav_items right_nav' },
                    _react2.default.createElement(
                        'div',
                        { className: 'wM' },
                        'About'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'wM' },
                        'Tools'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'wM' },
                        'Contact Me'
                    )
                )
            );
        }
    }]);

    return Menu;
}(_react.Component);

exports.default = Menu;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _cors = __webpack_require__(5);

var _cors2 = _interopRequireDefault(_cors);

var _server = __webpack_require__(6);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 8080;

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

app.get('*', function (req, res, next) {
    var markup = (0, _server.renderToString)(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.url, context: {} },
        _react2.default.createElement(_App2.default, null)
    ));

    res.status(200).send("<html><!DOCTYPE html><head>\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <title>Vashisht Gupta</title>\n        <meta name=\"description\" content=\"Vashisht Gupta - Web Developer. Let's build Kickass experiences on the web!\">\n  <script src=\"/bundle.js\" defer></script>\n  <link href=\"/main.css\" rel=\"stylesheet\">\n    <link href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.1/css/all.css\" rel=\"stylesheet\">\n\n      </head><body><div id=\"root\">" + markup + "</div></body></html>");
});
app.listen(port, function () {
    console.log('Server running');
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _routes = __webpack_require__(8);

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterDom = __webpack_require__(1);

var _My404component = __webpack_require__(15);

var _My404component2 = _interopRequireDefault(_My404component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _routes2.default.map(function (_ref) {
                    var path = _ref.path,
                        exact = _ref.exact,
                        C = _ref.component,
                        rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);

                    return _react2.default.createElement(_reactRouterDom.Route, {
                        key: path,
                        path: path,
                        exact: exact,
                        render: function render(props) {
                            return _react2.default.createElement(C, _extends({}, props, rest));
                        }
                    });
                }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '*', component: _My404component2.default })
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Home = __webpack_require__(9);

var _Home2 = _interopRequireDefault(_Home);

var _Grid = __webpack_require__(14);

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    path: '/',
    exact: true,
    component: _Home2.default
}, {
    path: '/routing/:id',
    component: _Grid2.default

}];

exports.default = routes;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Menu = __webpack_require__(2);

var _Menu2 = _interopRequireDefault(_Menu);

var _Main = __webpack_require__(10);

var _Main2 = _interopRequireDefault(_Main);

var _Tools = __webpack_require__(11);

var _Tools2 = _interopRequireDefault(_Tools);

var _Experience = __webpack_require__(13);

var _Experience2 = _interopRequireDefault(_Experience);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home(props) {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Menu2.default, null),
                _react2.default.createElement(_Main2.default, null),
                _react2.default.createElement(_Tools2.default, null),
                _react2.default.createElement(_Experience2.default, null)
            );
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Main = function (_Component) {
    _inherits(Main, _Component);

    function Main(props) {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));
    }

    _createClass(Main, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var id = document.getElementById("ham_button");
            id.onclick = function () {
                var navs = document.querySelectorAll('.nav_items');
                navs.forEach(function (nav) {
                    nav.classList.toggle('db');
                });
            };
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'main flx ff' },
                _react2.default.createElement(
                    'div',
                    { className: 'static mt200 ma w80' },
                    _react2.default.createElement(
                        'div',
                        { className: 'fww fs28' },
                        'HI THERE. LOOKING FOR A WEB DEVELOPER?'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'fww mt20 fs22' },
                        'I\'M A WEB DEVELOPER BASED IN NOIDA,UTTAR PRADESH'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'fww mt10 fs22' },
                        'I BUILD WEB APPLICATIONS USING JAVASCRIPT'
                    )
                )
            );
        }
    }]);

    return Main;
}(_react.Component);

exports.default = Main;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _Lang = __webpack_require__(12);

var _Lang2 = _interopRequireDefault(_Lang);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tools = function (_Component) {
    _inherits(Tools, _Component);

    function Tools(props) {
        _classCallCheck(this, Tools);

        return _possibleConstructorReturn(this, (Tools.__proto__ || Object.getPrototypeOf(Tools)).call(this, props));
    }

    _createClass(Tools, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'flx' },
                _react2.default.createElement(
                    'div',
                    { className: 'm50 w100' },
                    _react2.default.createElement('div', { className: 'ff bg ma fws fs24 ml20' })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'w100' },
                    _react2.default.createElement(
                        'div',
                        { className: 'ff cl pl10 fs24' },
                        'I\'m a Computer Science graduate specialising in front end development, with the prime aim of building seamless user experiences on the web.'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'w100 tc ff m50 fs22' },
                    'Tools,Languages and Frameworks'
                ),
                _react2.default.createElement(_Lang2.default, { url: 'React.png', name: 'ReactJS' }),
                _react2.default.createElement(_Lang2.default, { url: 'node.png', name: 'NodeJS' }),
                _react2.default.createElement(_Lang2.default, { url: 'javascript.png', name: 'Javascript' }),
                _react2.default.createElement(_Lang2.default, { url: 'redux.jpg', name: 'Redux' }),
                _react2.default.createElement(_Lang2.default, { url: 'python.png', name: 'Python' }),
                _react2.default.createElement(_Lang2.default, { url: 'php.jpeg', name: 'PHP' }),
                _react2.default.createElement(_Lang2.default, { url: 'yii.jpeg', name: 'Yii' }),
                _react2.default.createElement(_Lang2.default, { url: 'html.png', name: 'HTML' }),
                _react2.default.createElement(_Lang2.default, { url: 'css.png', name: 'CSS' })
            );
        }
    }]);

    return Tools;
}(_react.Component);

exports.default = Tools;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lang = function (_Component) {
    _inherits(Lang, _Component);

    function Lang(props) {
        _classCallCheck(this, Lang);

        var _this = _possibleConstructorReturn(this, (Lang.__proto__ || Object.getPrototypeOf(Lang)).call(this, props));

        _this.state = { hover: false };
        _this.toggleState = _this.toggleState.bind(_this);
        return _this;
    }

    _createClass(Lang, [{
        key: 'toggleState',
        value: function toggleState() {
            this.setState({
                hover: !this.state.hover
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var className = "languages vh";
            var className_img = '';
            if (this.state.hover) {
                className = "languages";
                className_img = 'border';
            }
            return _react2.default.createElement(
                'div',
                { className: 'images mt20', onMouseEnter: function onMouseEnter() {
                        _this2.toggleState();
                    }, onMouseLeave: function onMouseLeave() {
                        _this2.toggleState();
                    } },
                _react2.default.createElement('img', { src: this.props.url, className: className_img, height: '250px', width: '250px' }),
                _react2.default.createElement(
                    'div',
                    { className: className },
                    this.props.name
                )
            );
        }
    }]);

    return Lang;
}(_react.Component);

exports.default = Lang;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Card = __webpack_require__(16);

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Experience = function (_Component) {
    _inherits(Experience, _Component);

    function Experience(props) {
        _classCallCheck(this, Experience);

        return _possibleConstructorReturn(this, (Experience.__proto__ || Object.getPrototypeOf(Experience)).call(this, props));
    }

    _createClass(Experience, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'flx' },
                _react2.default.createElement(
                    'div',
                    { className: 'w100 tc ff m50 fs22' },
                    'Professional Experience'
                ),
                _react2.default.createElement(_Card2.default, null)
            );
        }
    }]);

    return Experience;
}(_react.Component);

exports.default = Experience;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Grid = function (_Component) {
    _inherits(Grid, _Component);

    function Grid(props) {
        _classCallCheck(this, Grid);

        return _possibleConstructorReturn(this, (Grid.__proto__ || Object.getPrototypeOf(Grid)).call(this, props));
    }

    _createClass(Grid, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                'Hi ',
                this.props.match.params.id
            );
        }
    }]);

    return Grid;
}(_react.Component);

exports.default = Grid;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Menu = __webpack_require__(2);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var My404component = function (_Component) {
    _inherits(My404component, _Component);

    function My404component(props) {
        _classCallCheck(this, My404component);

        return _possibleConstructorReturn(this, (My404component.__proto__ || Object.getPrototypeOf(My404component)).call(this, props));
    }

    _createClass(My404component, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Menu2.default, null),
                'Sorry nothing here :/'
            );
        }
    }]);

    return My404component;
}(_react.Component);

exports.default = My404component;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_Component) {
    _inherits(Card, _Component);

    function Card(props) {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this, props));
    }

    _createClass(Card, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "w100 flx bshadow p20" },
                    _react2.default.createElement(
                        "div",
                        { className: "logo ml10" },
                        _react2.default.createElement("img", { src: "im.jpg", height: "250px", width: "250px" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "content mr10" },
                        _react2.default.createElement(
                            "div",
                            { className: "crx head ff fs16" },
                            _react2.default.createElement(
                                "b",
                                null,
                                "IndiaMART InterMESH Limited"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "crx head ff fs16" },
                            _react2.default.createElement(
                                "div",
                                { className: "fl" },
                                _react2.default.createElement(
                                    "em",
                                    null,
                                    _react2.default.createElement(
                                        "b",
                                        null,
                                        "Software Programmer"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "fr" },
                                _react2.default.createElement(
                                    "em",
                                    null,
                                    _react2.default.createElement(
                                        "b",
                                        null,
                                        "July\u201918 - Present"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "ul",
                            { className: "ff" },
                            _react2.default.createElement(
                                "i",
                                null,
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Developed new features on, and Mantained Company Module of IndiaMART\u2019s mobile website."
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Optimized the code and employed best coding strategies to provide the best user experience by sequencing the loading of external Javascript files according to user requirement before or after page load, thereby acheiving a near perfect page speed insights score of 99 for company module."
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Implemented Voice Search across mobile website and mantained PWA modules."
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Migrated IndiaMART\u2019s home page from PHP to Javascript(PWA) using React-Redux and NodeJS in order to provide a better user experience"
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "w100 flx bshadow p20 mt10" },
                    _react2.default.createElement(
                        "div",
                        { className: "content mr10" },
                        _react2.default.createElement(
                            "div",
                            { className: "crx head ff fs16" },
                            _react2.default.createElement(
                                "b",
                                null,
                                "IndiaMART InterMESH Limited"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "crx head ff fs16" },
                            _react2.default.createElement(
                                "div",
                                { className: "fl" },
                                _react2.default.createElement(
                                    "em",
                                    null,
                                    _react2.default.createElement(
                                        "b",
                                        null,
                                        "Associate Software Programmer"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "fr" },
                                _react2.default.createElement(
                                    "em",
                                    null,
                                    _react2.default.createElement(
                                        "b",
                                        null,
                                        "June\u201917 - June'18"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "ul",
                            { className: "ff" },
                            _react2.default.createElement(
                                "i",
                                null,
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Developed new features on, and looked after Login/Identification, Manage buy requirement, profile and Home modules of IndiaMART mobile website, using Javascript and PHP."
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Implemented and Mantained personalization widgets across modules on mobile website, using Javascript and PHP."
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Restructured the entire code base of home module of mobile website for better code modularity, readability and easy mantainence."
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Played a vital role in migrating search module of mobile website from a standard server side rendered web application to Progressive Web App(PWA) by re-implementing features of search module in ReactJS, Node JS, and Redux. The features were earlier developed in PHP and Javascript"
                                ),
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Maintained Seller modules on PWA(ReactJS and NodeJS) portion of mobile website"
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "logo ml10" },
                        _react2.default.createElement("img", { src: "im.jpg", height: "250px", width: "250px" })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "w100 flx bshadow p20 mt10" },
                    _react2.default.createElement(
                        "div",
                        { className: "logo ml10" },
                        _react2.default.createElement("img", { src: "tcs.png", height: "250px", width: "250px" })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "content mr10" },
                        _react2.default.createElement(
                            "div",
                            { className: "crx head ff fs16" },
                            _react2.default.createElement(
                                "b",
                                null,
                                "Tata Consultancy Services"
                            )
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "crx head ff fs16" },
                            _react2.default.createElement(
                                "div",
                                { className: "fl" },
                                _react2.default.createElement(
                                    "em",
                                    null,
                                    _react2.default.createElement(
                                        "b",
                                        null,
                                        "Remote Intern"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "fr" },
                                _react2.default.createElement(
                                    "em",
                                    null,
                                    _react2.default.createElement(
                                        "b",
                                        null,
                                        "June\u201916 - July'16"
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            "ul",
                            { className: "ff" },
                            _react2.default.createElement(
                                "i",
                                null,
                                _react2.default.createElement(
                                    "li",
                                    null,
                                    "Developed a web based E-commerce Application,using Django Framework, and Python, with a fully functional Catalog and Cart, which recommends products(Product page recommendations and Home page recommendations) to the users based on the statistics of the products, and performed functional testing on the application"
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Card;
}(_react.Component);

exports.default = Card;

/***/ })
/******/ ]);