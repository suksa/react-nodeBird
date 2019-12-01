module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/PostForm.js




var PostForm_PostForm = function PostForm() {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return state.post;
  }),
      imagePaths = _useSelector.imagePaths;

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Form"], {
    style: {
      margin: '10px 0 20px'
    },
    encType: "multipart/form-data"
  }, external_react_default.a.createElement(external_antd_["Input"].TextArea, {
    maxLength: 140,
    placeholder: "\uBB34\uC2A8\uC77C\uC774 \uC788\uC5C8\uB098\uC694?"
  }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", {
    type: "file",
    multiple: true,
    hidden: true
  }), external_react_default.a.createElement(external_antd_["Button"], null, "\uC774\uBBF8\uC9C0 \uC5C5\uB85C\uB4DC"), external_react_default.a.createElement(external_antd_["Button"], {
    type: "primary",
    style: {
      "float": 'right'
    },
    htmlType: "submit"
  }, "\uC9F9\uC9F9")), external_react_default.a.createElement("div", null)));
};

/* harmony default export */ var components_PostForm = (PostForm_PostForm);
// CONCATENATED MODULE: ./components/PostCard.js



var PostCard_PostCard = function PostCard(_ref) {
  var post = _ref.post;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Card"], {
    key: +post.createdAt,
    cover: post.img && external_react_default.a.createElement("img", {
      alt: "example",
      src: post.img
    }),
    actions: [external_react_default.a.createElement(external_antd_["Icon"], {
      type: "retweet",
      key: "retweet"
    }), external_react_default.a.createElement(external_antd_["Icon"], {
      type: "heart",
      key: "heart"
    }), external_react_default.a.createElement(external_antd_["Icon"], {
      type: "message",
      key: "message"
    }), external_react_default.a.createElement(external_antd_["Icon"], {
      type: "ellipsis",
      key: "ellipsis"
    })],
    extra: external_react_default.a.createElement(external_antd_["Button"], null, "\uD314\uB85C\uC6B0"),
    style: {
      margin: 15
    }
  }, external_react_default.a.createElement(external_antd_["Card"].Meta, {
    avatar: external_react_default.a.createElement(external_antd_["Avatar"], null, post.User.nickname[0]),
    title: post.User.nickname,
    description: post.content
  })));
};

/* harmony default export */ var components_PostCard = (PostCard_PostCard);
// CONCATENATED MODULE: ./pages/index.js





var pages_Home = function Home() {
  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return state.user;
  }),
      isLoggedIn = _useSelector.isLoggedIn;

  var _useSelector2 = Object(external_react_redux_["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector2.mainPosts;

  return external_react_default.a.createElement(external_react_default.a.Fragment, null, isLoggedIn && external_react_default.a.createElement(components_PostForm, null), mainPosts.map(function (c) {
    return external_react_default.a.createElement(components_PostCard, {
      key: c,
      post: c
    });
  }));
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });