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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("W+IF");


/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "W+IF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./components/NicknameEditForm.js



var NicknameEditForm_NicknameEditForm = function NicknameEditForm() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_antd_["Form"], {
    style: {
      marginBottom: '20px',
      border: '1px solid #d9d9d9',
      padding: '20px'
    }
  }, external_react_default.a.createElement(external_antd_["Input"], {
    addonBefore: "\uB2C9\uB124\uC784"
  }), external_react_default.a.createElement(external_antd_["Button"], {
    type: "primary"
  }, "\uC218\uC815")));
};

/* harmony default export */ var components_NicknameEditForm = (NicknameEditForm_NicknameEditForm);
// CONCATENATED MODULE: ./pages/profile.js




var profile_Profile = function Profile() {
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(components_NicknameEditForm, null), external_react_default.a.createElement(external_antd_["List"], {
    style: {
      marginBottom: '20px'
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: external_react_default.a.createElement("div", null, "\uD314\uB85C\uC789 \uBAA9\uB85D"),
    loadMore: external_react_default.a.createElement(external_antd_["Button"], {
      style: {
        width: '100%'
      }
    }, "\uB354 \uBCF4\uAE30"),
    bordered: true,
    dataSource: ['제로초', '바보', '노드버드오피셜'],
    renderItem: function renderItem(item) {
      return external_react_default.a.createElement(external_antd_["List"].Item, {
        style: {
          marginTop: '20px'
        }
      }, external_react_default.a.createElement(external_antd_["Card"], {
        action: [external_react_default.a.createElement(external_antd_["Icon"], {
          key: "stop",
          type: "stop"
        })]
      }, external_react_default.a.createElement(external_antd_["Card"].Meta, {
        description: item
      })));
    }
  }), external_react_default.a.createElement(external_antd_["List"], {
    style: {
      marginBottom: '20px'
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: external_react_default.a.createElement("div", null, "\uD314\uB85C\uC6CC \uBAA9\uB85D"),
    loadMore: external_react_default.a.createElement(external_antd_["Button"], {
      style: {
        width: '100%'
      }
    }, "\uB354 \uBCF4\uAE30"),
    bordered: true,
    dataSource: ['제로초', '바보', '노드버드오피셜'],
    renderItem: function renderItem(item) {
      return external_react_default.a.createElement(external_antd_["List"].Item, {
        style: {
          marginTop: '20px'
        }
      }, external_react_default.a.createElement(external_antd_["Card"], {
        action: [external_react_default.a.createElement(external_antd_["Icon"], {
          key: "stop",
          type: "stop"
        })]
      }, external_react_default.a.createElement(external_antd_["Card"].Meta, {
        description: item
      })));
    }
  }));
};

/* harmony default export */ var profile = __webpack_exports__["default"] = (profile_Profile);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });