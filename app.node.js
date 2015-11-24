module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(25);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  var _componentsLayout = __webpack_require__(5);

  var _componentsLayout2 = _interopRequireDefault(_componentsLayout);

  var routes = {
    '/404': function _() {
      return __webpack_require__(8);
    }, '/500': function _() {
      return __webpack_require__(9);
    }, '/about': function about() {
      return __webpack_require__(10);
    }, '/blog': function blog() {
      return __webpack_require__(11);
    }, '/blog/something': function blogSomething() {
      return __webpack_require__(12);
    }, '/blog/template': function blogTemplate() {
      return __webpack_require__(13);
    }, '/blog/test-article-one': function blogTestArticleOne() {
      return __webpack_require__(14);
    }, '/blog/test-article-two': function blogTestArticleTwo() {
      return __webpack_require__(15);
    }, '/': function _() {
      return __webpack_require__(16);
    }, '/portfolio': function portfolio() {
      return __webpack_require__(17);
    } }; // Auto-generated on build. See tools/lib/routes-loader.js

  var route = function route(path, callback) {
    var handler, component;
    return regeneratorRuntime.async(function route$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          handler = routes[path] || routes['/404'];
          context$1$0.next = 3;
          return regeneratorRuntime.awrap(handler());

        case 3:
          component = context$1$0.sent;
          context$1$0.next = 6;
          return regeneratorRuntime.awrap(callback(_react2['default'].createElement(
            _componentsLayout2['default'],
            { pathName: path },
            _react2['default'].createElement(component)
          )));

        case 6:
        case 'end':
          return context$1$0.stop();
      }
    }, null, _this);
  };

  function run() {
    var _this2 = this;

    var container = document.getElementById('app');
    _coreLocation2['default'].listen(function (location) {
      route(location.pathname, function callee$2$0(component) {
        return regeneratorRuntime.async(function callee$2$0$(context$3$0) {
          while (1) switch (context$3$0.prev = context$3$0.next) {
            case 0:
              return context$3$0.abrupt('return', _reactDom2['default'].render(component, container, function () {
                // Track the page view event via Google Analytics
                window.ga('send', 'pageview');
              }));

            case 1:
            case 'end':
              return context$3$0.stop();
          }
        }, null, _this2);
      });
    });
  }

  if (_fbjsLibExecutionEnvironment.canUseDOM) {
    // Run the application when both DOM is ready and page content is loaded
    if (['complete', 'loaded', 'interactive'].includes(document.readyState) && document.body) {
      run();
    } else {
      document.addEventListener('DOMContentLoaded', run, false);
    }
  }

  exports['default'] = { route: route, routes: routes };
  module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];

  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};

  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _fbjsLibExecutionEnvironment = __webpack_require__(4);

  var _historyLibCreateBrowserHistory = __webpack_require__(22);

  var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

  var _historyLibCreateMemoryHistory = __webpack_require__(23);

  var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

  var _historyLibUseQueries = __webpack_require__(24);

  var _historyLibUseQueries2 = _interopRequireDefault(_historyLibUseQueries);

  var location = (0, _historyLibUseQueries2['default'])(_fbjsLibExecutionEnvironment.canUseDOM ? _historyLibCreateBrowserHistory2['default'] : _historyLibCreateMemoryHistory2['default'])();

  exports['default'] = location;
  module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/ExecutionEnvironment");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(18);

  var _Navigation = __webpack_require__(7);

  var _Navigation2 = _interopRequireDefault(_Navigation);

  function Layout(props) {
    var children = props.children;
    var pathName = props.pathName;

    var isHome = pathName === '/';
    return _react2['default'].createElement(
      'div',
      { className: 'Layout' },
      _react2['default'].createElement(_Navigation2['default'], { isHome: isHome, pathName: pathName }),
      !isHome && children
    );
  }

  Layout.propTypes = {
    children: _react.PropTypes.element.isRequired
  };

  exports['default'] = Layout;
  module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _this = this;

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(19);

  var _coreLocation = __webpack_require__(3);

  var _coreLocation2 = _interopRequireDefault(_coreLocation);

  function isLeftClickEvent(event) {
    return event.button === 0;
  }

  function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
  }

  var Link = (function (_Component) {
    _inherits(Link, _Component);

    function Link() {
      _classCallCheck(this, Link);

      _get(Object.getPrototypeOf(Link.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(Link, [{
      key: 'render',
      value: function render() {
        var _props = this.props;
        var to = _props.to;
        var children = _props.children;

        var props = _objectWithoutProperties(_props, ['to', 'children']);

        return _react2['default'].createElement(
          'a',
          _extends({ onClick: Link.handleClick.bind(this) }, props),
          children
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        to: _react.PropTypes.string.isRequired,
        children: _react.PropTypes.element.isRequired,
        state: _react.PropTypes.object,
        onClick: _react.PropTypes.func
      },
      enumerable: true
    }, {
      key: 'handleClick',
      value: function value(event) {
        var allowTransition = true;
        var clickResult = undefined;

        if (_this.props && _this.props.onClick) {
          clickResult = _this.props.onClick(event);
        }

        if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
          return;
        }

        if (clickResult === false || event.defaultPrevented === true) {
          allowTransition = false;
        }

        event.preventDefault();

        if (allowTransition) {
          var link = event.currentTarget;
          _coreLocation2['default'].pushState(_this.props && _this.props.state || null, _this.props && _this.props.to || link.pathname + link.search);
        }
      },
      enumerable: true
    }]);

    return Link;
  })(_react.Component);

  exports['default'] = Link;
  module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(20);

  var _Link = __webpack_require__(6);

  var _Link2 = _interopRequireDefault(_Link);

  function Navigation(props) {
    var isHome = props.isHome;
    var pathName = props.pathName;

    var mapRoundViewClassName = {
      '/': '',
      '/about': ' personal-view-open',
      '/portfolio': ' portfolio-view-open',
      '/blog': ' blog-view-open'
    };
    var mapSidebarClassName = {
      '/': '',
      '/about': ' personal-sidebar-open',
      '/portfolio': ' portfolio-sidebar-open',
      '/blog': ' blog-sidebar-open'
    };
    return _react2['default'].createElement(
      'div',
      { className: 'nav-container' },
      isHome && _react2['default'].createElement(
        'ul',
        { className: 'nav-list' },
        _react2['default'].createElement(
          'li',
          { className: 'nav-link', onMouseEnter: function () {
              return openView('personal-view-open');
            }, onMouseLeave: closeView },
          _react2['default'].createElement(
            'a',
            { href: '/about', onClick: _Link2['default'].handleClick },
            _react2['default'].createElement(
              'h1',
              { className: 'personal' },
              'Tran Trung Tin'
            ),
            _react2['default'].createElement('div', { className: 'bottom-bar' })
          )
        ),
        _react2['default'].createElement(
          'li',
          { className: 'nav-link', onMouseEnter: function () {
              return openView('portfolio-view-open');
            }, onMouseLeave: closeView },
          _react2['default'].createElement(
            'a',
            { href: '/portfolio', onClick: _Link2['default'].handleClick },
            _react2['default'].createElement(
              'h2',
              { className: 'portfolio' },
              'Works'
            ),
            _react2['default'].createElement('div', { className: 'bottom-bar' })
          )
        ),
        _react2['default'].createElement(
          'li',
          { className: 'nav-link', onMouseEnter: function () {
              return openView('blog-view-open');
            }, onMouseLeave: closeView },
          _react2['default'].createElement(
            'a',
            { href: '/blog', onClick: _Link2['default'].handleClick },
            _react2['default'].createElement(
              'h2',
              { className: 'blog' },
              'Blog'
            ),
            _react2['default'].createElement('div', { className: 'bottom-bar' })
          )
        ),
        _react2['default'].createElement(
          'li',
          { className: 'nav-link', onMouseEnter: function () {
              return openView('contact-view-open');
            }, onMouseLeave: closeView },
          _react2['default'].createElement(
            'a',
            { href: '/#', onClick: _Link2['default'].handleClick },
            _react2['default'].createElement(
              'h2',
              { className: 'contact' },
              'Contact'
            ),
            _react2['default'].createElement('div', { className: 'bottom-bar' })
          )
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'round-view' + mapRoundViewClassName[pathName], onMouseEnter: function (e) {
            e.stopPropagation();
          } },
        _react2['default'].createElement(
          'div',
          { className: 'view-content personal-view' },
          _react2['default'].createElement(
            'h3',
            null,
            'Name: '
          ),
          _react2['default'].createElement(
            'em',
            null,
            'Tran Trung Tin'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'h3',
            null,
            'Location: '
          ),
          _react2['default'].createElement(
            'em',
            null,
            'Ho Chi Minh city'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'h3',
            null,
            'Age: '
          ),
          _react2['default'].createElement(
            'em',
            null,
            '24'
          ),
          _react2['default'].createElement('br', null)
        ),
        _react2['default'].createElement(
          'div',
          { className: 'view-content blog-view' },
          _react2['default'].createElement(
            'em',
            null,
            'Coming Soon'
          )
        ),
        _react2['default'].createElement(
          'div',
          { className: 'view-content portfolio-view' },
          _react2['default'].createElement(
            'h4',
            null,
            'Years of Experience: '
          ),
          _react2['default'].createElement(
            'em',
            null,
            '0.5'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'h4',
            null,
            'Expertise: '
          ),
          _react2['default'].createElement(
            'em',
            null,
            'React + Node'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'h4',
            null,
            'Language: '
          ),
          _react2['default'].createElement(
            'em',
            null,
            'English'
          ),
          _react2['default'].createElement('br', null)
        ),
        _react2['default'].createElement(
          'div',
          { className: 'view-content contact-view' },
          _react2['default'].createElement(
            'h4',
            null,
            'Email: '
          ),
          _react2['default'].createElement(
            'em',
            null,
            ' trungtindev@gmail.com'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'h4',
            null,
            'Homepage: '
          ),
          _react2['default'].createElement(
            'em',
            null,
            ' trungtin.work'
          ),
          _react2['default'].createElement('br', null),
          _react2['default'].createElement(
            'h4',
            null,
            'Phone: '
          ),
          _react2['default'].createElement(
            'em',
            null,
            ' (+84) 93-736-2215'
          ),
          _react2['default'].createElement('br', null)
        )
      ),
      _react2['default'].createElement(
        'div',
        { className: 'sidebar' + mapSidebarClassName[pathName] },
        !isHome && _react2['default'].createElement(
          'div',
          { className: 'nav' },
          _react2['default'].createElement(
            'div',
            { className: 'nav-link' },
            _react2['default'].createElement(
              'h2',
              null,
              _react2['default'].createElement(
                'a',
                { href: '/', onClick: _Link2['default'].handleClick },
                '<<'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'nav-link' },
            _react2['default'].createElement(
              'h2',
              null,
              _react2['default'].createElement(
                'a',
                { href: '/blog', onClick: _Link2['default'].handleClick },
                'Blog'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'nav-link' },
            _react2['default'].createElement(
              'h2',
              null,
              _react2['default'].createElement(
                'a',
                { href: '/portfolio', onClick: _Link2['default'].handleClick },
                'Portfolio'
              )
            )
          ),
          _react2['default'].createElement(
            'div',
            { className: 'nav-link' },
            _react2['default'].createElement(
              'h2',
              null,
              _react2['default'].createElement(
                'a',
                { href: '/about', onClick: _Link2['default'].handleClick },
                'About me'
              )
            )
          )
        )
      )
    );
  }

  function openView(className) {
    window.document.getElementsByClassName('round-view')[0].classList.add(className);
  }

  function closeView() {
    window.document.getElementsByClassName('round-view')[0].className = 'round-view';
  }

  exports['default'] = Navigation;
  module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Not Found'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'The page you\'re looking for was not found.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Error'
          ),
          _react2['default'].createElement(
            'pre',
            null,
            this.props.error ? this.props.error.message + '\n\n' + this.props.error.stack : 'A critical error occurred.'
          )
        );
      }
    }], [{
      key: 'propTypes',
      value: {
        error: _react.PropTypes.instanceOf(Error)
      },
      enumerable: true
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  __webpack_require__(21);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          { className: 'container' },
          _react2['default'].createElement('div', { className: 'col col-13' }),
          _react2['default'].createElement('div', { className: 'col-23' })
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Blog'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), "constructor", this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: "render",
      value: function render() {
        return _react2["default"].createElement(
          "div",
          null,
          _react2["default"].createElement(
            "h1",
            { id: "first-test-post" },
            "First test post"
          ),
          _react2["default"].createElement(
            "p",
            null,
            "Something fancy."
          ),
          _react2["default"].createElement(
            "table",
            null,
            _react2["default"].createElement(
              "thead",
              null,
              _react2["default"].createElement(
                "tr",
                null,
                _react2["default"].createElement(
                  "th",
                  null,
                  "Column 1"
                ),
                _react2["default"].createElement(
                  "th",
                  null,
                  "Column2"
                )
              )
            ),
            _react2["default"].createElement(
              "tbody",
              null,
              _react2["default"].createElement(
                "tr",
                null,
                _react2["default"].createElement(
                  "td",
                  null,
                  "Data 1"
                ),
                _react2["default"].createElement(
                  "td",
                  null,
                  "Data 2"
                )
              ),
              _react2["default"].createElement(
                "tr",
                null,
                _react2["default"].createElement(
                  "td",
                  null,
                  "Data 3"
                ),
                _react2["default"].createElement(
                  "td",
                  null,
                  "Data 4"
                )
              )
            )
          ),
          _react2["default"].createElement(
            "p",
            null,
            _react2["default"].createElement(
              "strong",
              null,
              "This is bold"
            ),
            " and ",
            _react2["default"].createElement(
              "em",
              null,
              "this is italic"
            ),
            "."
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports["default"] = _default;
  module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          '#[content]'
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 1'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Test Article 2'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'Home Page'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

  /**
   * React Static Boilerplate
   * https://github.com/koistya/react-static-boilerplate
   * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
   */

  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _react = __webpack_require__(1);

  var _react2 = _interopRequireDefault(_react);

  var _default = (function (_Component) {
    _inherits(_default, _Component);

    function _default() {
      _classCallCheck(this, _default);

      _get(Object.getPrototypeOf(_default.prototype), 'constructor', this).apply(this, arguments);
    }

    _createClass(_default, [{
      key: 'render',
      value: function render() {
        return _react2['default'].createElement(
          'div',
          null,
          _react2['default'].createElement(
            'h1',
            null,
            'My works'
          ),
          _react2['default'].createElement(
            'p',
            null,
            'Coming soon.'
          )
        );
      }
    }]);

    return _default;
  })(_react.Component);

  exports['default'] = _default;
  module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/*\r\n * Scaffolding\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Typography\r\n * -------------------------------------------------------------------------- */\r\n\r\nhtml, body {\r\n  margin: 0;\r\n  padding: 0;\r\n  background-color: #f7f7f7;\r\n  color: #333;\r\n  font-family: 'Roboto','Helvetica',sans-serif;\r\n}\r\n\r\n.Layout {\r\n  overflow: auto;\r\n  margin: 0 auto;\r\n  width: 100vw;\r\n  @else if phablet == tablet {\r\n\r\n    @media (min-width: 50em) {\r\n      width: 85vw;\r\n    }\r\n  }\r\n  @else if phablet == phablet {\r\n\r\n    @media (min-width: 48em) {\r\n      width: 85vw;\r\n    }\r\n  }\r\n  @else if phablet == mobileonly {\r\n\r\n    @media (max-width: 37.5em) {\r\n      width: 85vw;\r\n    }\r\n  }\r\n  @else if laptop == tablet {\r\n\r\n    @media (min-width: 50em) {\r\n      width: 70vw;\r\n    }\r\n  }\r\n  @else if laptop == phablet {\r\n\r\n    @media (min-width: 48em) {\r\n      width: 70vw;\r\n    }\r\n  }\r\n  @else if laptop == mobileonly {\r\n\r\n    @media (max-width: 37.5em) {\r\n      width: 70vw;\r\n    }\r\n  }\r\n}\r\n\r\n@media (min-width: 64em) {\r\n\r\n  .Layout {\r\n    width: 85vw;\r\n  }\r\n}\r\n\r\n@media (min-width: 64em) {\r\n\r\n  .Layout {\r\n    width: 70vw;\r\n  }\r\n}", ""]);

  // exports


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, "/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n.Link {\r\n\r\n}\r\n", ""]);

  // exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports
  exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Oswald:400,700);", ""]);

  // module
  exports.push([module.id, "\r\n/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/**\r\n * React Static Boilerplate\r\n * https://github.com/koistya/react-static-boilerplate\r\n * Copyright (c) Konstantin Tarkus (@koistya) | MIT license\r\n */\r\n\r\n/*\r\n * Scaffolding\r\n * -------------------------------------------------------------------------- */\r\n\r\n/*\r\n * Typography\r\n * -------------------------------------------------------------------------- */\r\n\r\n.nav-list {\r\n  position: absolute;\r\n  top: 50vh;\r\n  -webkit-transform: translateY(-50%);\r\n      -ms-transform: translateY(-50%);\r\n       -o-transform: translateY(-50%);\r\n          transform: translateY(-50%);\r\n  margin: 0 auto;\r\n  list-style: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.nav-list h1, .nav-list h2 {\r\n  font-family: 'Oswald';\r\n  display: inline-block;\r\n  margin: 0.5rem;\r\n}\r\n\r\n.nav-list h1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\n.nav-list h2 {\r\n  font-weight: 400;\r\n}\r\n\r\n.nav-list .nav-link a {\r\n  text-decoration: none;\r\n  color: #9b9b9b;\r\n}\r\n\r\n.nav-list .nav-link:hover .personal {\r\n  color: #00E676;\r\n}\r\n\r\n.nav-list .nav-link:hover .portfolio {\r\n  color: #00B0FF;\r\n}\r\n\r\n.nav-list .nav-link:hover .blog {\r\n  color: #AA00FF;\r\n}\r\n\r\n.nav-list .nav-link:hover .contact {\r\n  color: #F50057;\r\n}\r\n\r\n.nav-list .bottom-bar {\r\n  margin-left: 1rem;\r\n  display: inline-block;\r\n  width: 60vw;\r\n  border-bottom: solid 0.5px #bcbcbc;\r\n}\r\n\r\n.nav-list .bottom-bar:after {\r\n  display: inline-block;\r\n  content: '';\r\n  min-width: 0;\r\n  -webkit-transition: all 1s linear;\r\n  -o-transition: all 1s linear;\r\n  transition: all 1s linear;\r\n  margin-bottom: -5px;\r\n  overflow: hidden;\r\n  height: 1rem;\r\n}\r\n\r\n.nav-list .personal + .bottom-bar:after {\r\n  border-bottom: solid 2px #00E676;\r\n}\r\n\r\n.nav-list .portfolio + .bottom-bar:after {\r\n  border-bottom: solid 2px #00B0FF;\r\n}\r\n\r\n.nav-list .blog + .bottom-bar:after {\r\n  border-bottom: solid 2px #AA00FF;\r\n}\r\n\r\n.nav-list .contact + .bottom-bar:after {\r\n  border-bottom: solid 2px #F50057;\r\n}\r\n\r\n.nav-list .nav-link:hover .bottom-bar:after {\r\n  min-width: 100%;\r\n  margin-bottom: -5px;\r\n}\r\n\r\n.round-view {\r\n  background: #f7f7f7;\r\n  position: absolute;\r\n  top: 50vh;\r\n  right: 15vw;\r\n  -webkit-transform: translate(50%, -50%);\r\n      -ms-transform: translate(50%, -50%);\r\n       -o-transform: translate(50%, -50%);\r\n          transform: translate(50%, -50%);\r\n  border: solid 0.5px #bcbcbc;\r\n  border-radius: 50%;\r\n  width: 16.5rem;\r\n  height: 16.5rem;\r\n  z-index: 5;\r\n}\r\n\r\n.round-view::before, .round-view::after {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  content: '';\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  border-radius: 50%;\r\n}\r\n\r\n.round-view::before {\r\n  border: 2px solid transparent;\r\n}\r\n\r\n.round-view::after {\r\n  border: 0 solid transparent;\r\n}\r\n\r\n.round-view.personal-view-open, .round-view.portfolio-view-open, .round-view.blog-view-open, .round-view.contact-view-open {\r\n  border: solid 0px #bcbcbc;\r\n}\r\n\r\n.round-view.personal-view-open:before, .round-view.portfolio-view-open:before, .round-view.blog-view-open:before, .round-view.contact-view-open:before {\r\n  -webkit-transition: border-top-color 0.15s linear,\r\n        border-right-color 0.15s linear 0.10s,\r\n        border-bottom-color 0.15s linear 0.20s;\r\n  -o-transition: border-top-color 0.15s linear,\r\n        border-right-color 0.15s linear 0.10s,\r\n        border-bottom-color 0.15s linear 0.20s;\r\n  transition:\r\n        border-top-color 0.15s linear,\r\n        border-right-color 0.15s linear 0.10s,\r\n        border-bottom-color 0.15s linear 0.20s;\r\n}\r\n\r\n.round-view.personal-view-open:after, .round-view.portfolio-view-open:after, .round-view.blog-view-open:after, .round-view.contact-view-open:after {\r\n  border-left-width: 2px;\r\n  border-right-width: 2px;\r\n  -webkit-transform: rotate(270deg);\r\n      -ms-transform: rotate(270deg);\r\n       -o-transform: rotate(270deg);\r\n          transform: rotate(270deg);\r\n  -webkit-transition: border-left-width 0s linear 0.35s,\r\n        -webkit-transform 0.4s linear 0s;\r\n  transition: border-left-width 0s linear 0.35s,\r\n        -webkit-transform 0.4s linear 0s;\r\n  -o-transition: transform 0.4s linear 0s,\r\n        border-left-width 0s linear 0.35s,\r\n        -o-transform 0.4s linear 0s;\r\n  transition: transform 0.4s linear 0s,\r\n        border-left-width 0s linear 0.35s;\r\n  transition:\r\n        transform 0.4s linear 0s,\r\n        border-left-width 0s linear 0.35s,\r\n        -webkit-transform 0.4s linear 0s,\r\n        -o-transform 0.4s linear 0s;\r\n}\r\n\r\n.round-view.personal-view-open~.sidebar:after, .round-view.portfolio-view-open~.sidebar:after, .round-view.blog-view-open~.sidebar:after, .round-view.contact-view-open~.sidebar:after {\r\n  height: 100%;\r\n  top: 0;\r\n}\r\n\r\n.round-view.personal-view-open::before {\r\n  border-top-color: #00E676;\r\n  border-right-color: #00E676;\r\n  border-bottom-color: #00E676;\r\n}\r\n\r\n.round-view.personal-view-open::after {\r\n  border-top: 2px solid #00E676;\r\n}\r\n\r\n.round-view.personal-view-open~.sidebar:after {\r\n  border-left: 2px solid #00E676;\r\n}\r\n\r\n.round-view.portfolio-view-open::before {\r\n  border-top-color: #00B0FF;\r\n  border-right-color: #00B0FF;\r\n  border-bottom-color: #00B0FF;\r\n}\r\n\r\n.round-view.portfolio-view-open::after {\r\n  border-top: 2px solid #00B0FF;\r\n}\r\n\r\n.round-view.portfolio-view-open~.sidebar:after {\r\n  border-left: 2px solid #00B0FF;\r\n}\r\n\r\n.round-view.blog-view-open::before {\r\n  border-top-color: #AA00FF;\r\n  border-right-color: #AA00FF;\r\n  border-bottom-color: #AA00FF;\r\n}\r\n\r\n.round-view.blog-view-open::after {\r\n  border-top: 2px solid #AA00FF;\r\n}\r\n\r\n.round-view.blog-view-open~.sidebar:after {\r\n  border-left: 2px solid #AA00FF;\r\n}\r\n\r\n.round-view.contact-view-open::before {\r\n  border-top-color: #F50057;\r\n  border-right-color: #F50057;\r\n  border-bottom-color: #F50057;\r\n}\r\n\r\n.round-view.contact-view-open::after {\r\n  border-top: 2px solid #F50057;\r\n}\r\n\r\n.round-view.contact-view-open~.sidebar:after {\r\n  border-left: 2px solid #F50057;\r\n}\r\n\r\n.round-view.personal-view-open .view-content.personal-view{\r\n  visibility: visible;\r\n  opacity: 1;\r\n  -webkit-transition: opacity 0.5s ease-in-out;\r\n  -o-transition: opacity 0.5s ease-in-out;\r\n  transition: opacity 0.5s ease-in-out;\r\n}\r\n\r\n.round-view.portfolio-view-open .view-content.portfolio-view{\r\n  visibility: visible;\r\n  opacity: 1;\r\n  -webkit-transition: opacity 0.5s ease-in-out;\r\n  -o-transition: opacity 0.5s ease-in-out;\r\n  transition: opacity 0.5s ease-in-out;\r\n}\r\n\r\n.round-view.blog-view-open .view-content.blog-view{\r\n  visibility: visible;\r\n  opacity: 1;\r\n  -webkit-transition: opacity 0.5s ease-in-out;\r\n  -o-transition: opacity 0.5s ease-in-out;\r\n  transition: opacity 0.5s ease-in-out;\r\n}\r\n\r\n.round-view.contact-view-open .view-content.contact-view{\r\n  visibility: visible;\r\n  opacity: 1;\r\n  -webkit-transition: opacity 0.5s ease-in-out;\r\n  -o-transition: opacity 0.5s ease-in-out;\r\n  transition: opacity 0.5s ease-in-out;\r\n}\r\n\r\n.round-view .view-content {\r\n  color: #9b9b9b;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: absolute;\r\n  white-space: nowrap;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n      -ms-transform: translate(-50%, -50%);\r\n       -o-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  text-align: center;\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  display: block;\r\n  -webkit-transition: opacity 0.5s ease-in-out;\r\n  -o-transition: opacity 0.5s ease-in-out;\r\n  transition: opacity 0.5s ease-in-out;\r\n}\r\n\r\n.round-view .view-content h3, .round-view .view-content h4, .round-view .view-content em {\r\n  display: inline-block\r\n}\r\n\r\n.round-view h3 {\r\n  display: inline-block;\r\n}\r\n\r\n.sidebar {\r\n  position: absolute;\r\n  z-index: 1;\r\n  background: #f7f7f7;\r\n  width: 15vw;\r\n  height: 100%;\r\n  right: 0;\r\n  border-left: 1px solid #bcbcbc;\r\n  margin: 0;\r\n}\r\n\r\n.sidebar::after {\r\n  position: absolute;\r\n  content: '';\r\n  width: 100%;\r\n  height: 0;\r\n  top: 50%;\r\n  margin: 0;\r\n  border-left: 1px solid #bcbcbc;\r\n  -webkit-transition: top 0.5s ease-in-out, height 0.5s ease-in-out;\r\n  -o-transition: top 0.5s ease-in-out, height 0.5s ease-in-out;\r\n  transition: top 0.5s ease-in-out, height 0.5s ease-in-out;\r\n}\r\n\r\n.sidebar::before {\r\n  position: absolute;\r\n  content: '';\r\n  height: 100%;\r\n  width: 0;\r\n  right: 0;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n  -o-transition: all 0.5s ease-in-out;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.sidebar.personal-sidebar-open::before {\r\n  width: 100%;\r\n  background-color: #00E676;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n  -o-transition: all 0.5s ease-in-out;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.sidebar.portfolio-sidebar-open::before {\r\n  width: 100%;\r\n  background-color: #00B0FF;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n  -o-transition: all 0.5s ease-in-out;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.sidebar.blog-sidebar-open::before {\r\n  width: 100%;\r\n  background-color: #AA00FF;\r\n  -webkit-transition: all 0.5s ease-in-out;\r\n  -o-transition: all 0.5s ease-in-out;\r\n  transition: all 0.5s ease-in-out;\r\n}\r\n\r\n.sidebar .nav {\r\n  text-align: right;\r\n  position: absolute;\r\n  bottom: 10%;\r\n  right: 28%;\r\n  z-index: 5;\r\n}\r\n\r\n.sidebar .nav h2 {\r\n  line-height: 1.3rem;\r\n}\r\n\r\n.sidebar .nav a {\r\n  text-decoration: none;\r\n  color: white;\r\n}", ""]);

  // exports


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(2)();
  // imports


  // module
  exports.push([module.id, ".container {\r\n}\r\n.col {\r\n\tdisplay: inline-block;\r\n\tfloat: left;\r\n}\r\n.col-13 {\r\n\twidth: calc(100%/3);\r\n}\r\n.col-23 {\r\n\twidth: calc(200%/3);\r\n}\r\n.col-12 {\r\n\twidth: 50%;\r\n}", ""]);

  // exports


/***/ },
/* 22 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createBrowserHistory");

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("history/lib/createMemoryHistory");

/***/ },
/* 24 */
/***/ function(module, exports) {

  module.exports = require("history/lib/useQueries");

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("react-dom");

/***/ }
/******/ ]);