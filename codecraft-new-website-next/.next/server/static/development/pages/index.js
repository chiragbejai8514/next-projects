module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"static\\development\\pages\\index.js": 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/AllServices/AllServices.css":
/*!************************************************!*\
  !*** ./components/AllServices/AllServices.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/AllServices/AllServices.js":
/*!***********************************************!*\
  !*** ./components/AllServices/AllServices.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AllServices_AllServices_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AllServices/AllServices.css */ "./components/AllServices/AllServices.css");
/* harmony import */ var _AllServices_AllServices_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AllServices_AllServices_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./components/AllServices/data.js");
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\AllServices\\AllServices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AllServices = () => {
  const servicesAll = _data_js__WEBPACK_IMPORTED_MODULE_2__["default"].map(service => {
    const item = service.services.map(serviceName => __jsx("div", {
      className: "allServices-container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 59
      }
    }, serviceName));
    return __jsx("div", {
      key: service.id,
      className: "flex-column section-12-container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "allServices",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "allServices-name",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }
    }, service.name), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }
    }, item)));
  });
  return __jsx("div", {
    className: "section-12 container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex-wrap-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, " ", servicesAll));
};

/* harmony default export */ __webpack_exports__["default"] = (AllServices);

/***/ }),

/***/ "./components/AllServices/data.js":
/*!****************************************!*\
  !*** ./components/AllServices/data.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const links = [{
  id: 1,
  name: 'Mobile Application Development',
  services: ['iOS App development', 'Android App development', 'Progressive Web Applications', 'Enterprise Mobile Applications', 'Hybrid Applications', ' Offshore Mobile App Development']
}, {
  id: 2,
  name: 'Web Application Development',
  services: ['iOS App development', 'Android App development', 'Progressive Web Applications', 'Enterprise Mobile Applications', 'Hybrid Applications', ' Offshore Mobile App Development']
}, {
  id: 3,
  name: 'UI/UX Design',
  services: ['iOS App development', 'Android App development', 'Progressive Web Applications', 'Enterprise Mobile Applications', 'Hybrid Applications', ' Offshore Mobile App Development']
}, {
  id: 4,
  name: 'Cloud Solutions ',
  services: ['iOS App development', 'Android App development', 'Progressive Web Applications', 'Enterprise Mobile Applications', 'Hybrid Applications', ' Offshore Mobile App Development']
}, {
  id: 5,
  name: 'SaaS Services',
  services: ['iOS App development', 'Android App development', 'Progressive Web Applications', 'Enterprise Mobile Applications', 'Hybrid Applications', ' Offshore Mobile App Development']
}, {
  id: 6,
  name: 'Focus Industries',
  services: ['iOS App development', 'Android App development', 'Progressive Web Applications', 'Enterprise Mobile Applications', 'Hybrid Applications', ' Offshore Mobile App Development']
}, {
  id: 7,
  name: 'Quality Assurance and Testing Services',
  services: ['iOS App development', 'Android App development', 'Progressive Web Applications', 'Enterprise Mobile Applications', 'Hybrid Applications', ' Offshore Mobile App Development']
}, {
  id: 8,
  name: 'Pages',
  services: ['iOS App development', 'Android App development', 'Progressive Web Applications', 'Enterprise Mobile Applications', 'Hybrid Applications', ' Offshore Mobile App Development']
}];
/* harmony default export */ __webpack_exports__["default"] = (links);

/***/ }),

/***/ "./components/Footer/Footer.css":
/*!**************************************!*\
  !*** ./components/Footer/Footer.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.css */ "./components/Footer/Footer.css");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Footer\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Footer = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "scroll-top",
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "icon-angle-double-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 48
    }
  })), __jsx("div", {
    className: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "footer-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "social-media-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://medium.com/@CodeCraft",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "icon-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 85
    }
  })), __jsx("a", {
    href: "https://in.linkedin.com/company/codecraft-technologies-private-limited",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "icon-linkedin2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 126
    }
  })), __jsx("a", {
    href: "https://twitter.com/codecrafttech",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "icon-twitter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 89
    }
  })), __jsx("a", {
    href: "https://www.facebook.com/CodeCraft",
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "icon-facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 90
    }
  }))), __jsx("p", {
    className: "slogan",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, "Driving innovation with passion"), __jsx("h4", {
    className: "footer-logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, "CodeCraft "), __jsx("small", {
    className: "color-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 55
    }
  }, "Technologies"))), __jsx("div", {
    className: "last",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, "Copyright \xA9 2017"), __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }, "CodeCraftTechnologies Pvt. Ltd")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Form/Form.css":
/*!**********************************!*\
  !*** ./components/Form/Form.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Form/Form.js":
/*!*********************************!*\
  !*** ./components/Form/Form.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_Form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Form/Form.css */ "./components/Form/Form.css");
/* harmony import */ var _Form_Form_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Form_Form_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Form\\Form.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const DevProcess = () => {
  const {
    0: userName,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: howCanWeHelp,
    1: setHowCanWeHelp
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');

  const howCanWeHelpHandler = event => {
    setHowCanWeHelp(event.target.value);
  };

  return (// <form>
    //     <div>
    //         <label>Uesrname</label>
    //         <input type='text' value={userName} onChange={userNameHandler} />
    //     </div>
    // </form>
    __jsx("section", {
      className: "section-form form",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "section-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }
    }, "Start a"), __jsx("div", {
      className: "section-title section-title-2 font-montserrat",
      id: "contact-section",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }, "Project with CodeCraft"), __jsx("div", {
      className: "note text-center",
      id: "contact-form-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, "Fill in this form or ", __jsx("a", {
      href: "mailto:%63%6f%6e%74%61%63%74%75%73%40%63%6f%64%65%63%72%61%66%74%2e%63%6f%2e%69%6e",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 96
      }
    }, "send us an e-mail"), " "), __jsx("h4", {
      id: "form-status-message",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }), __jsx("button", {
      className: "custom-button",
      id: "try-again-btn",
      onClick: "tryAgainContactForm()",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }
    }, "RETRY"), __jsx("form", {
      id: "contact-form",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "flex-wrap-row",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 25
      }
    }, __jsx("input", {
      type: "text",
      placeholder: " ",
      name: "projectgoal",
      size: "30",
      value: howCanWeHelp,
      onChange: howCanWeHelpHandler,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 29
      }
    }), __jsx("span", {
      className: "floating-label",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 29
      }
    }, "How can we help?"), __jsx("div", {
      className: "error-msg",
      id: "work-field-err",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 29
      }
    }, "This field can not be empty")), __jsx("div", {
      className: "half",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 25
      }
    }, __jsx("input", {
      type: "text",
      size: "50",
      name: "timeline",
      placeholder: " ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 29
      }
    }), __jsx("span", {
      className: "floating-label",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 29
      }
    }, "Timeline (optional)")), __jsx("div", {
      className: "half",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "range-input-label-wrapper",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, __jsx("label", {
      for: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 33
      }
    }, "My budget is ", __jsx("span", {
      id: "amount",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 60
      }
    })), __jsx("div", {
      className: "radio-buttons",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 33
      }
    }, __jsx("label", {
      className: "radio-btn-container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 37
      }
    }, __jsx("input", {
      className: "radio-btn",
      type: "radio",
      checked: "checked",
      name: "radio",
      value: "INR",
      oninput: "currencyChanged(this.value)",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 41
      }
    }), __jsx("span", {
      className: "checkmark",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 41
      }
    }, "INR")), __jsx("label", {
      className: "radio-btn-container",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 37
      }
    }, __jsx("input", {
      className: "radio-btn",
      type: "radio",
      name: "radio",
      value: "USD",
      oninput: "currencyChanged(this.value)",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 41
      }
    }), __jsx("span", {
      className: "checkmark",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 41
      }
    }, "USD")))), __jsx("input", {
      id: "amount-range",
      type: "range",
      className: "custom-range",
      value: "1",
      min: "0",
      max: "4",
      oninput: "amountSelected(this.value)",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: "half",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 25
      }
    }, __jsx("input", {
      type: "text",
      placeholder: " ",
      name: "name",
      size: "30",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 29
      }
    }), __jsx("span", {
      className: "floating-label",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }
    }, "Name"), __jsx("div", {
      className: "error-msg",
      id: "name-field-err",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, "Please enter your name")), __jsx("div", {
      className: "half",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 25
      }
    }, __jsx("input", {
      type: "text",
      placeholder: " ",
      name: "company",
      size: "100",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    }), __jsx("span", {
      className: "floating-label",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 29
      }
    }, "Company or organisation"), __jsx("div", {
      className: "error-msg",
      id: "company-field-err",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      }
    }, "This field can not be empty")), __jsx("div", {
      className: "half",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 25
      }
    }, __jsx("input", {
      type: "text",
      placeholder: " ",
      name: "phone",
      size: "30",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 29
      }
    }), __jsx("span", {
      className: "floating-label",
      id: "phone-label",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 29
      }
    }, "Phone"), __jsx("div", {
      className: "error-msg",
      id: "phone-field-err",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 29
      }
    }, "Phone number can only contain digits")), __jsx("div", {
      className: "half",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 25
      }
    }, __jsx("input", {
      type: "text",
      placeholder: " ",
      name: "email",
      size: "30",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 29
      }
    }), __jsx("span", {
      className: "floating-label",
      id: "email-label",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }
    }, "Email"), __jsx("div", {
      className: "error-msg",
      id: "email-field-err",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 29
      }
    }, "You have entered an invalid e-mail address, try again")), __jsx("div", {
      className: "full",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 25
      }
    }, __jsx("input", {
      type: "text",
      placeholder: " ",
      size: "200",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 29
      }
    }), __jsx("span", {
      className: "floating-label",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, "Tell us about your project (optional)")), __jsx("div", {
      className: "full text-center",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 25
      }
    }, __jsx("button", {
      type: "submit",
      className: "btn",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    }, "SEND"))))))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (DevProcess);

/***/ }),

/***/ "./components/Header/Header.css":
/*!**************************************!*\
  !*** ./components/Header/Header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_Header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Header/Header.css */ "./components/Header/Header.css");
/* harmony import */ var _Header_Header_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Header_Header_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./components/Header/data.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Header\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





const Header = () => {
  const items = _data_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  let {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const menuItems = items.map(item => __jsx("li", {
    key: item.id,
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: item.url,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, item.name)));
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    window.addEventListener("scroll", function (event) {
      if (this.scrollY <= 10) {
        document.getElementById('header').classList.remove('change');
      } else {
        document.getElementById('header').classList.add('change');
      }
    });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return __jsx("div", {
    className: "header  fixed ",
    id: "header",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "flex-wrap-row container center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "company-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, "CodeCraft ", __jsx("small", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 35
    }
  }, "Technologies"))), __jsx("div", {
    className: "nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx("ul", {
    className: "nav-body flex-wrap-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }, menuItems, __jsx("li", {
    className: "nav-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, __jsx("span", {
    className: "btn-buy",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, "Email Us"))))), __jsx("div", {
    className: "dropdown",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "icon-hamburger",
    onClick: () => {
      show === true ? setShow(false) : setShow(true);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: `dropBox ${show === true ? 'show' : 'noShow'}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, menuItems)));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/data.js":
/*!***********************************!*\
  !*** ./components/Header/data.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const links = [{
  id: 1,
  name: 'Home',
  url: 'http://www.codecraft.co.in/#home'
}, {
  id: 2,
  name: 'About Us',
  url: 'http://www.codecraft.co.in/#home'
}, {
  id: 3,
  name: 'Clients',
  url: 'http://www.codecraft.co.in/#home'
}, {
  id: 4,
  name: 'Portfolios',
  url: 'http://www.codecraft.co.in/#home'
}, {
  id: 5,
  name: 'Careers',
  url: 'http://www.codecraft.co.in/#home'
}, {
  id: 6,
  name: 'Team',
  url: 'http://www.codecraft.co.in/#home'
}, {
  id: 7,
  name: 'Contact',
  url: 'http://www.codecraft.co.in/#home'
}];
/* harmony default export */ __webpack_exports__["default"] = (links);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Layout = props => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 6
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, "Leading Mobile App development company in India: CodeCraft Technologies"), __jsx("link", {
  rel: "shortcut icon",
  href: "//d18q2npc6mijvg.cloudfront.net/other/favicon.png",
  type: "image/x-icon",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "owl-carousel/owl.carousel.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }
}), __jsx("script", {
  src: "jquery-1.9.1.min.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 13
  }
}), __jsx("script", {
  src: "assets/owl-carousel/owl.carousel.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 13
  }
}), __jsx("script", {
  src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 13
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "owl-carousel/owl.theme.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 13
  }
})), __jsx(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }
}), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Section-1-Cover/Cover.css":
/*!**********************************************!*\
  !*** ./components/Section-1-Cover/Cover.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Section-1-Cover/Cover.js":
/*!*********************************************!*\
  !*** ./components/Section-1-Cover/Cover.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cover_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cover.css */ "./components/Section-1-Cover/Cover.css");
/* harmony import */ var _Cover_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Cover_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-1-Cover\\Cover.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Header = () => __jsx("div", {
  className: "section-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "container flex-wrap-row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "section-1-info ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "section-title section-title-1 ",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, "Mobile App"), __jsx("div", {
  className: "section-title section-title-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }
}, "Development Company in US"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 17
  }
}, "A digital lifestyle, driven by\xA0Mobile application development in US, is widespread. With millions of users,\xA0\xA0mobile application development\xA0should be part of any business strategy. Whatever your business is, our domain expertise, specialist\xA0mobile app developers\xA0with decades of\xA0mobile application development experience for customers in US\xA0\xA0will help your brand stand out from the competition. CodeCraft technologies is more than a\xA0\xA0Mobile App development company; we are your digital partner to success."), __jsx("button", {
  className: "btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 17
  }
}, "LET'S TALK")), __jsx("div", {
  className: "pic",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 13
  }
}, __jsx("img", {
  src: "../../static/images/section-1/mobile-app-development.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 17
  }
}))));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Section-10-Insights/InsightCard.js":
/*!*******************************************************!*\
  !*** ./components/Section-10-Insights/InsightCard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-10-Insights\\InsightCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const InsightCard = props => __jsx("div", {
  className: "news-card flex-column",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "news-pic",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }
}, __jsx("img", {
  src: props.children.image,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 13
  }
})), __jsx("div", {
  className: "news-body",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "news-date",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, props.children.date), __jsx("div", {
  className: "news-name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }
}, props.children.name), __jsx("div", {
  className: "news-about",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
}, props.children.about)));

/* harmony default export */ __webpack_exports__["default"] = (InsightCard);

/***/ }),

/***/ "./components/Section-10-Insights/Insights.css":
/*!*****************************************************!*\
  !*** ./components/Section-10-Insights/Insights.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Section-10-Insights/Insights.js":
/*!****************************************************!*\
  !*** ./components/Section-10-Insights/Insights.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Insights_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Insights.css */ "./components/Section-10-Insights/Insights.css");
/* harmony import */ var _Insights_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Insights_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./components/Section-10-Insights/data.js");
/* harmony import */ var _InsightCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InsightCard */ "./components/Section-10-Insights/InsightCard.js");
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-10-Insights\\Insights.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Insights = () => {
  const newsItems = _data_js__WEBPACK_IMPORTED_MODULE_2__["default"].map(insight => __jsx(_InsightCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: insight.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, insight));
  return __jsx("div", {
    className: "section-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "section-title section-title-1 ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "Insights"), __jsx("div", {
    className: "section-title section-title-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "And News"), __jsx("div", {
    className: "section-10-container flex-wrap-row center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, newsItems)));
};

/* harmony default export */ __webpack_exports__["default"] = (Insights);

/***/ }),

/***/ "./components/Section-10-Insights/data.js":
/*!************************************************!*\
  !*** ./components/Section-10-Insights/data.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const links = [{
  id: 1,
  name: 'Web Application',
  about: 'The solution powered enterprises to identify and right-size any identity.',
  image: "../../static/images/section-10/insight-news-1.png",
  date: "11th October 2019"
}, {
  id: 2,
  name: 'UI/UX Design',
  about: 'The solution powered enterprises to identify and right-size any identity.',
  image: "../../static/images/section-10/insight-news-2.png",
  date: "11th October 2019"
}, {
  id: 3,
  name: 'Cloud Solutions',
  about: 'The solution powered enterprises to identify and right-size any identity.',
  image: "../../static/images/section-10/insight-news-3.png",
  date: "11th October 2019"
}];
/* harmony default export */ __webpack_exports__["default"] = (links);

/***/ }),

/***/ "./components/Section-11-Questions/Questions.css":
/*!*******************************************************!*\
  !*** ./components/Section-11-Questions/Questions.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Section-11-Questions/Questions.js":
/*!******************************************************!*\
  !*** ./components/Section-11-Questions/Questions.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Questions_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Questions.css */ "./components/Section-11-Questions/Questions.css");
/* harmony import */ var _Questions_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Questions_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./components/Section-11-Questions/data.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-11-Questions\\Questions.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const Questions = () => {
  const {
    0: activeId,
    1: setActiveId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const asks = _data_js__WEBPACK_IMPORTED_MODULE_1__["default"].map((data, index) => __jsx("div", {
    key: data.id,
    className: "question-card flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: `plus-minus-toggle ${parseInt(activeId) === data.id ? '' : 'collapsed'}`,
    onClick: () => activeId === data.id ? setActiveId(0) : setActiveId(data.id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "question-ask",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, data.name), __jsx("div", {
    className: `question-answer  ${parseInt(activeId) === data.id ? 'active' : ''}`,
    id: "question-answer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, data.about))));
  return __jsx("div", {
    className: "section-11 grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "section-title section-title-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Frequently"), __jsx("div", {
    className: "section-title section-title-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Asked Questions"), __jsx("div", {
    className: "section-11-container flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, asks)));
};

/* harmony default export */ __webpack_exports__["default"] = (Questions);

/***/ }),

/***/ "./components/Section-11-Questions/data.js":
/*!*************************************************!*\
  !*** ./components/Section-11-Questions/data.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const question = [{
  id: 1,
  name: 'How does CodeCraft engineer Mobile App Development?',
  about: 'CodeCraft is a Mobile App development company with decades of experience in the Mobility Service field. We provide innovative app development and digital solutions to business problems to spur growth and to increase the customer base. With a creative engineering team comprising of skilled and experienced app developers and top-class designers, we mix our technical expertise in conjunction with the customer domain to craft products and services in an Agile methodology. We work on different models of development that suits our customers need like Onshore, Offshore model, Time and money, retainer project, etc. A single point of contact helms every project. An experienced project manager helps our customers to clarify or discuss any task at hand, thus providing the best possible mobility services.'
}, {
  id: 2,
  name: 'How will CodeCraft work with my team to help my business?',
  about: 'CodeCraft is a Mobile App development company with decades of experience in the Mobility Service field. We provide innovative app development and digital solutions to business problems to spur growth and to increase the customer base. With a creative engineering team comprising of skilled and experienced app developers and top-class designers, we mix our technical expertise in conjunction with the customer domain to craft products and services in an Agile methodology. We work on different models of development that suits our customers need like Onshore, Offshore model, Time and money, retainer project, etc. A single point of contact helms every project. An experienced project manager helps our customers to clarify or discuss any task at hand, thus providing the best possible mobility services.'
}, {
  id: 3,
  name: 'What’s CodeCrafts development methodology?',
  about: 'CodeCraft is a Mobile App development company with decades of experience in the Mobility Service field. We provide innovative app development and digital solutions to business problems to spur growth and to increase the customer base. With a creative engineering team comprising of skilled and experienced app developers and top-class designers, we mix our technical expertise in conjunction with the customer domain to craft products and services in an Agile methodology. We work on different models of development that suits our customers need like Onshore, Offshore model, Time and money, retainer project, etc. A single point of contact helms every project. An experienced project manager helps our customers to clarify or discuss any task at hand, thus providing the best possible mobility services.'
}, {
  id: 4,
  name: 'What skillset does CodeCraft offer?',
  about: 'CodeCraft is a Mobile App development company with decades of experience in the Mobility Service field. We provide innovative app development and digital solutions to business problems to spur growth and to increase the customer base. With a creative engineering team comprising of skilled and experienced app developers and top-class designers, we mix our technical expertise in conjunction with the customer domain to craft products and services in an Agile methodology. We work on different models of development that suits our customers need like Onshore, Offshore model, Time and money, retainer project, etc. A single point of contact helms every project. An experienced project manager helps our customers to clarify or discuss any task at hand, thus providing the best possible mobility services.'
}, {
  id: 5,
  name: 'How is CodeCraft different from other companies?',
  about: 'CodeCraft is a Mobile App development company with decades of experience in the Mobility Service field. We provide innovative app development and digital solutions to business problems to spur growth and to increase the customer base. With a creative engineering team comprising of skilled and experienced app developers and top-class designers, we mix our technical expertise in conjunction with the customer domain to craft products and services in an Agile methodology. We work on different models of development that suits our customers need like Onshore, Offshore model, Time and money, retainer project, etc. A single point of contact helms every project. An experienced project manager helps our customers to clarify or discuss any task at hand, thus providing the best possible mobility services.'
}, {
  id: 6,
  name: 'What pricing model does CodeCraft follow?',
  about: 'CodeCraft is a Mobile App development company with decades of experience in the Mobility Service field. We provide innovative app development and digital solutions to business problems to spur growth and to increase the customer base. With a creative engineering team comprising of skilled and experienced app developers and top-class designers, we mix our technical expertise in conjunction with the customer domain to craft products and services in an Agile methodology. We work on different models of development that suits our customers need like Onshore, Offshore model, Time and money, retainer project, etc. A single point of contact helms every project. An experienced project manager helps our customers to clarify or discuss any task at hand, thus providing the best possible mobility services.'
}];
/* harmony default export */ __webpack_exports__["default"] = (question);

/***/ }),

/***/ "./components/Section-2-Offering/Offering.css":
/*!****************************************************!*\
  !*** ./components/Section-2-Offering/Offering.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Section-2-Offering/Offering.js":
/*!***************************************************!*\
  !*** ./components/Section-2-Offering/Offering.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Offering_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Offering.css */ "./components/Section-2-Offering/Offering.css");
/* harmony import */ var _Offering_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Offering_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OfferingCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfferingCard */ "./components/Section-2-Offering/OfferingCard.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.js */ "./components/Section-2-Offering/data.js");
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-2-Offering\\Offering.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const Offering = () => {
  const {
    0: items
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(_data_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const carditems = items.map(item => __jsx("div", {
    key: item.id,
    className: "section-2-card flex-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "card-div",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("img", {
    src: item.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  })), __jsx(_OfferingCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, item)));
  return (//Section-2-Offering start
    __jsx("div", {
      className: "section-2 container flex-column ",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "section-title section-title-1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    }, "Our Offerings In"), __jsx("div", {
      className: "section-title section-title-2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }
    }, "Mobile App Development"), __jsx("div", {
      className: "section-2-container flex-column",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    }, carditems))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Offering);

/***/ }),

/***/ "./components/Section-2-Offering/OfferingCard.js":
/*!*******************************************************!*\
  !*** ./components/Section-2-Offering/OfferingCard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./components/Section-2-Offering/data.js");
/* harmony import */ var _Offering_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Offering.css */ "./components/Section-2-Offering/Offering.css");
/* harmony import */ var _Offering_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Offering_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-2-Offering\\OfferingCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Card = props => {
  const carditems = __jsx("div", {
    className: " right card-details flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "section-title section-title-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, props.children.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, props.children.about), __jsx("button", {
    className: "btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "LEARN MORE"));

  return carditems;
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Section-2-Offering/data.js":
/*!***********************************************!*\
  !*** ./components/Section-2-Offering/data.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const links = [{
  id: 1,
  name: 'iOS',
  about: 'The most popular mobile application development platform in US is iOS. With over 50%market share, reach out to more customers with our iOS Application services. Whether you want to build a brand or you want to create omnichannel experiences for your customers on various iOS devices, with our award-winning designs on the iOS, we got you covered. We help businesses visualize and bring to life their ideas, from Conceptualization to successful deployment.',
  image: "../../static/images/section-2/ios.png"
}, {
  id: 2,
  name: 'Android',
  about: 'Explore our suite of Android application development and discover how your business can benefit from our proven expertise on Android. Android is the world&#39;s most popular smartphone OS and runs on a wide variety of mobile devices. We help build the most customer-oriented solution for your business with our custom Android Application development for the US market all encompassed in pixel-perfect user experience',
  image: "../../static/images/section-2/android.png"
}, {
  id: 3,
  name: 'Cross-Platform/Hybrid',
  about: 'Cross-platform and Hybrid solutions can help your business to deliver faster updates to customers and reduce business costs as a result. Discover our cross-platform mobile app development services with React Native, Flutter, and many other cross-platform solutions for your business. With Cross platform applications, you can use a single code base to reach out to customers using different devices to expand your customer base.',
  image: "../../static/images/section-2/hybrid-app.png"
}, {
  id: 4,
  name: 'Enterprise Mobile Apps',
  about: 'Make your business totally mobile with our Enterprise mobile applications. Wherever your employees and customers are, provide safe and secure access to your enterprise data and services. Our enterprise mobile application services on major platforms help an enterprise to streamline their process. With real-time and on-time data available, your business will benefit from timely decisions',
  image: "../../static/images/section-2/enterprise-mobile-app.png"
}, {
  id: 5,
  name: 'Progressive Web Apps',
  about: 'Progressive web apps bridge the gap between a native app and a web app. PWAs work offline and load immediately to give your users the feel of a native app. We make your brand stand out by building blazing fast PWA that runs natively with features like location tagging, notification, offline browsing, and easy app update',
  image: "../../static/images/section-2/pwa.png"
}];
/* harmony default export */ __webpack_exports__["default"] = (links);

/***/ }),

/***/ "./components/Section-3-ChooseUs/ChooseUs.css":
/*!****************************************************!*\
  !*** ./components/Section-3-ChooseUs/ChooseUs.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Section-3-ChooseUs/ChooseUs.js":
/*!***************************************************!*\
  !*** ./components/Section-3-ChooseUs/ChooseUs.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ChooseUs_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChooseUs.css */ "./components/Section-3-ChooseUs/ChooseUs.css");
/* harmony import */ var _ChooseUs_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ChooseUs_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./components/Section-3-ChooseUs/data.js");
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-3-ChooseUs\\ChooseUs.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ChooseUs = () => {
  const items = _data_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  const chooseItems = items.map(item => __jsx("div", {
    key: item.id,
    className: "section-3-box flex-column center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: item.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "box-info center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, item.about)));
  return __jsx("div", {
    className: "section-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container flex-column center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "section-title section-title-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Why"), __jsx("div", {
    className: "section-title section-title-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, "Choose Us"), __jsx("div", {
    className: "section-3-container flex-wrap-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, chooseItems)));
};

/* harmony default export */ __webpack_exports__["default"] = (ChooseUs);

/***/ }),

/***/ "./components/Section-3-ChooseUs/data.js":
/*!***********************************************!*\
  !*** ./components/Section-3-ChooseUs/data.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const links = [{
  id: 1,
  name: 'ISO',
  about: 'ISO/IEC 27001:2013 & ISO 9001:2015 Certified',
  image: "../../static/images/section-3/iso.png"
}, {
  id: 2,
  name: 'HIPAA',
  about: 'HIPAA Compliant',
  image: "../../static/images/section-3/hipaa.png"
}, {
  id: 3,
  name: 'IPR',
  about: 'Guaranteed IPR and source code protection',
  image: "../../static/images/section-3/ipr.png"
}, {
  id: 4,
  name: 'Enterprise Mobile Apps',
  about: '1000+ Applications developed & deployed with featured apps',
  image: "../../static/images/section-3/applications.png"
}, {
  id: 5,
  name: 'Agile',
  about: '1000+ Applications developed & deployed with featured apps',
  image: "../../static/images/section-3/agile.png"
}, {
  id: 6,
  name: '',
  about: 'Brightest Engineering minds & creative designers',
  image: "../../static/images/section-3/team.png"
}, {
  id: 7,
  name: '',
  about: 'Custom pricing models to suit your needs',
  image: "../../static/images/section-3/price.png"
}, {
  id: 8,
  name: '',
  about: 'Offshore/Onshore model of working',
  image: "../../static/images/section-3/offshore.png"
}];
/* harmony default export */ __webpack_exports__["default"] = (links);

/***/ }),

/***/ "./components/Section-4-DevProcess/DevProcess.css":
/*!********************************************************!*\
  !*** ./components/Section-4-DevProcess/DevProcess.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Section-4-DevProcess/DevProcess.js":
/*!*******************************************************!*\
  !*** ./components/Section-4-DevProcess/DevProcess.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DevProcess_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DevProcess.css */ "./components/Section-4-DevProcess/DevProcess.css");
/* harmony import */ var _DevProcess_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DevProcess_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./components/Section-4-DevProcess/data.js");
/* harmony import */ var _ProcessCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProcessCard */ "./components/Section-4-DevProcess/ProcessCard.js");
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-4-DevProcess\\DevProcess.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DevProcess = () => {
  const items = _data_js__WEBPACK_IMPORTED_MODULE_2__["default"].map(data => __jsx(_ProcessCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: data.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, data));
  return __jsx("div", {
    className: "section-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "section-title section-title-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "Our"), __jsx("div", {
    className: "section-title section-title-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Development Process"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "With Design thinking at heart and Agile methodologies as a practice, CodeCraft follows an \u201Cideate design-prototype-build-test\u201D method of development. Beginning with Conceptualization, we prototype your ideas, vision into a concrete requirement. Our projects are helmed by a domain specialist project manager who serves as a contact person. The engineering process comprises of small, focussed two-week sprint cycles with rigorous quality and feedback integrated. Every sprint ] ends with an addition to the product which is reviewed and tested by the client"), __jsx("div", {
    className: "section-4-container flex-wrap-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "left-container flex-column",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, items), __jsx("div", {
    className: "section-4-image",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: "../../static/images/section-4/development-process.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (DevProcess);

/***/ }),

/***/ "./components/Section-4-DevProcess/ProcessCard.js":
/*!********************************************************!*\
  !*** ./components/Section-4-DevProcess/ProcessCard.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./components/Section-4-DevProcess/data.js");
/* harmony import */ var _DevProcess_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DevProcess.css */ "./components/Section-4-DevProcess/DevProcess.css");
/* harmony import */ var _DevProcess_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_DevProcess_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section_5_Industries_Industries_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Section-5-Industries/Industries.css */ "./components/Section-5-Industries/Industries.css");
/* harmony import */ var _Section_5_Industries_Industries_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Section_5_Industries_Industries_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-4-DevProcess\\ProcessCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Card = props => {
  const carditems = __jsx("div", {
    className: "card-container center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: props.children.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "card-about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, props.children.about));

  return carditems;
};

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/Section-4-DevProcess/data.js":
/*!*************************************************!*\
  !*** ./components/Section-4-DevProcess/data.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const links = [{
  id: 1,
  name: 'design-thinking',
  about: 'We follow design thinking and agile methodologies at an organisational level',
  image: "../../static/images/section-4/design-thinking.png"
}, {
  id: 2,
  name: 'domain-specialist',
  about: 'Domain specialist, a project manager for business contact',
  image: "../../static/images/section-4/domain-specialist.png"
}, {
  id: 3,
  name: 'development-process',
  about: 'Constant interaction with stakeholders, feedback-driven',
  image: "../../static/images/section-4/development-process.png"
}, {
  id: 4,
  name: 'Focussed',
  about: 'Focussed, Quality centric two week sprints',
  image: "../../static/images/section-4/sprints.png"
}];
/* harmony default export */ __webpack_exports__["default"] = (links);

/***/ }),

/***/ "./components/Section-5-Industries/Industries.css":
/*!********************************************************!*\
  !*** ./components/Section-5-Industries/Industries.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Section-5-Industries/Industries.js":
/*!*******************************************************!*\
  !*** ./components/Section-5-Industries/Industries.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ "./components/Section-5-Industries/data.js");
/* harmony import */ var _Section_4_DevProcess_ProcessCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Section-4-DevProcess/ProcessCard */ "./components/Section-4-DevProcess/ProcessCard.js");
/* harmony import */ var _Industries_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Industries.css */ "./components/Section-5-Industries/Industries.css");
/* harmony import */ var _Industries_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Industries_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-5-Industries\\Industries.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Industries = () => {
  const items = _data_js__WEBPACK_IMPORTED_MODULE_1__["default"].map(data => __jsx(_Section_4_DevProcess_ProcessCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: data.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, data));
  return __jsx("div", {
    className: "section-5 grey center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "section-title section-title-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Industries"), __jsx("div", {
    className: "section-title section-title-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "We Serve"), __jsx("div", {
    className: "industries flex-wrap-row center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, items)));
};

/* harmony default export */ __webpack_exports__["default"] = (Industries);

/***/ }),

/***/ "./components/Section-5-Industries/data.js":
/*!*************************************************!*\
  !*** ./components/Section-5-Industries/data.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const links = [{
  id: 1,
  name: 'Energy',
  about: 'Energy',
  image: "../../static/images/section-5/energy.png"
}, {
  id: 2,
  name: 'Gaming',
  about: 'Gaming',
  image: "../../static/images/section-5/gaming.png"
}, {
  id: 3,
  name: 'Healthcare and Medical',
  about: 'Healthcare and Medical',
  image: "../../static/images/section-5/healthcare-and-medical.png"
}, {
  id: 4,
  name: 'Information Technology',
  about: 'Information Technology',
  image: "../../static/images/section-5/it.png"
}, {
  id: 5,
  name: 'Manufacturing',
  about: 'Manufacturing',
  image: "../../static/images/section-5/manufacturing.png"
}, {
  id: 6,
  name: 'Media',
  about: 'Media',
  image: "../../static/images/section-5/media.png"
}, {
  id: 7,
  name: 'Real Estate',
  about: 'Real Estate',
  image: "../../static/images/section-5/real-estate.png"
}, {
  id: 8,
  name: 'Enterprise',
  about: 'Enterprise',
  image: "../../static/images/section-5/enterprise.png"
}, {
  id: 9,
  name: 'Banking',
  about: 'Banking',
  image: "../../static/images/section-5/banking.png"
}, {
  id: 10,
  name: 'Industrial',
  about: 'Industrial',
  image: "../../static/images/section-5/industrial.png"
}, {
  id: 11,
  name: 'Cloud Security',
  about: 'Cloud Security',
  image: "../../static/images/section-5/cloud-security.png"
}, {
  id: 12,
  name: 'Other Industeries',
  about: 'Other Industeries',
  image: "../../static/images/section-5/other-industries.png"
}];
/* harmony default export */ __webpack_exports__["default"] = (links);

/***/ }),

/***/ "./components/Section-6-PortFolio/PortFolio.css":
/*!******************************************************!*\
  !*** ./components/Section-6-PortFolio/PortFolio.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Section-6-PortFolio/PortFolio.js":
/*!*****************************************************!*\
  !*** ./components/Section-6-PortFolio/PortFolio.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PortFolio_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortFolio.css */ "./components/Section-6-PortFolio/PortFolio.css");
/* harmony import */ var _PortFolio_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PortFolio_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.js */ "./components/Section-6-PortFolio/data.js");
/* harmony import */ var _PortfolioCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PortfolioCard */ "./components/Section-6-PortFolio/PortfolioCard.js");
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-6-PortFolio\\PortFolio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const PortFolio = () => {
  const newsItems = _data_js__WEBPACK_IMPORTED_MODULE_3__["default"].map(portfolio => __jsx(_PortfolioCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: portfolio.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, portfolio));
  return __jsx("div", {
    className: "section-6 grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container flex-column center ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "section-title section-title-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "Our"), __jsx("div", {
    className: "section-title section-title-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "PortFolio"), __jsx("div", {
    className: "section-6-container flex-wrap-row jc-space_even",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, newsItems), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/about",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("button", {
    className: "btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "LOAD MORE"))));
};

/* harmony default export */ __webpack_exports__["default"] = (PortFolio);

/***/ }),

/***/ "./components/Section-6-PortFolio/PortfolioCard.js":
/*!*********************************************************!*\
  !*** ./components/Section-6-PortFolio/PortfolioCard.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PortFolio_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortFolio.css */ "./components/Section-6-PortFolio/PortFolio.css");
/* harmony import */ var _PortFolio_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PortFolio_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-6-PortFolio\\PortfolioCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PortfolioCard = props => __jsx("div", {
  className: "port-folio-card",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "Pcard-wrapper",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "Pcard-img",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 17
  }
}, __jsx("img", {
  src: props.children.image,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 21
  }
}), __jsx("div", {
  className: "Pcard-name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "Pcard-heading Pcard-heading-1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 25
  }
}, props.children.name), __jsx("div", {
  className: "Pcard-heading Pcard-heading-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 25
  }
}, props.children.field))))));

/* harmony default export */ __webpack_exports__["default"] = (PortfolioCard);

/***/ }),

/***/ "./components/Section-6-PortFolio/data.js":
/*!************************************************!*\
  !*** ./components/Section-6-PortFolio/data.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const links = [{
  id: 1,
  name: 'Montefiore',
  field: 'HealthCare',
  about: 'The solution powered enterprises to identify and right-size any identity that has access privilege to the enterprises cloud platform. This would enable an organisation to gain valuable insights into access rights, users, resources and actions performed on their cloud infrastructure.',
  image: 'http://d1qgh7vfxb2rk6.cloudfront.net/portfolio/montefiore.png'
}, {
  id: 2,
  name: 'Lava',
  field: 'Digital Marketing',
  about: 'The solution powered enterprises to identify and right-size any identity that has access privilege to the enterprises cloud platform. This would enable an organisation to gain valuable insights into access rights, users, resources and actions performed on their cloud infrastructure.',
  image: 'http://d1qgh7vfxb2rk6.cloudfront.net/portfolio/lava.png'
}, {
  id: 3,
  name: 'Cox Communications',
  field: 'IoT',
  about: 'The solution powered enterprises to identify and right-size any identity that has access privilege to the enterprises cloud platform. This would enable an organisation to gain valuable insights into access rights, users, resources and actions performed on their cloud infrastructure.',
  image: 'http://d1qgh7vfxb2rk6.cloudfront.net/portfolio/cox.png'
}, {
  id: 4,
  name: 'CloudNox ',
  field: 'IT Security',
  about: 'The solution powered enterprises to identify and right-size any identity that has access privilege to the enterprises cloud platform. This would enable an organisation to gain valuable insights into access rights, users, resources and actions performed on their cloud infrastructure.',
  image: 'http://d1qgh7vfxb2rk6.cloudfront.net/portfolio/cloudknox.png'
}, {
  id: 5,
  name: 'PennPetChem',
  field: 'Process Industry',
  about: 'The solution powered enterprises to identify and right-size any identity that has access privilege to the enterprises cloud platform. This would enable an organisation to gain valuable insights into access rights, users, resources and actions performed on their cloud infrastructure.',
  image: 'http://d1qgh7vfxb2rk6.cloudfront.net/portfolio/pennpetchem.png'
}, {
  id: 6,
  name: 'Smart BP Monitor',
  field: 'HealthCare',
  about: 'The solution powered enterprises to identify and right-size any identity that has access privilege to the enterprises cloud platform. This would enable an organisation to gain valuable insights into access rights, users, resources and actions performed on their cloud infrastructure.',
  image: 'http://d1qgh7vfxb2rk6.cloudfront.net/portfolio/smart-bp-monitor.png'
}];
/* harmony default export */ __webpack_exports__["default"] = (links);

/***/ }),

/***/ "./components/Section-7-Clients/Clients.css":
/*!**************************************************!*\
  !*** ./components/Section-7-Clients/Clients.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Section-7-Clients/Clients.js":
/*!*************************************************!*\
  !*** ./components/Section-7-Clients/Clients.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Clients_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Clients.css */ "./components/Section-7-Clients/Clients.css");
/* harmony import */ var _Clients_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Clients_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-7-Clients\\Clients.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Clients = () => {
  return __jsx("div", {
    className: " section-7 grey",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container flex-column center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "section-title section-title-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Our"), __jsx("div", {
    className: "section-title section-title-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Trusted Clients"), __jsx("div", {
    className: "clients flex-wrap-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: "../../static/images/section-7/enphase.png",
    alt: "enphase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "../../static/images/section-7/cloudknox.png",
    alt: "cloudknox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "../../static/images/section-7/efoverwatch.png",
    alt: "efoverwatch",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "../../static/images/section-7/pennpetchem.png",
    alt: "pennpetchem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "../../static/images/section-7/cox.png",
    alt: "cox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "../../static/images/section-7/sears.png",
    alt: "sears",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "../../static/images/section-7/ubsoft.png",
    alt: "ubsoft",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "../../static/images/section-7/mts.png",
    alt: "mts",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "../../static/images/section-7/uirevolution.png",
    alt: "uirevolution",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }), __jsx("img", {
    src: "../../static/images/section-7/sba.png",
    alt: "sba",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Clients);

/***/ }),

/***/ "./components/Section-8-TheySay/TheySay.css":
/*!**************************************************!*\
  !*** ./components/Section-8-TheySay/TheySay.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Section-8-TheySay/TheySay.js":
/*!*************************************************!*\
  !*** ./components/Section-8-TheySay/TheySay.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheySay_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheySay.css */ "./components/Section-8-TheySay/TheySay.css");
/* harmony import */ var _TheySay_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_TheySay_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.carousel.css */ "./node_modules/owl.carousel/dist/assets/owl.carousel.css");
/* harmony import */ var owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_assets_owl_carousel_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! owl.carousel/dist/assets/owl.theme.default.css */ "./node_modules/owl.carousel/dist/assets/owl.theme.default.css");
/* harmony import */ var owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(owl_carousel_dist_assets_owl_theme_default_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-8-TheySay\\TheySay.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(() => Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-owl-carousel */ "react-owl-carousel", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! react-owl-carousel */ "react-owl-carousel")],
    modules: ['react-owl-carousel']
  }
});

class Apps extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      // responsive: {
      //     0: {
      //         items: 1
      //     }
      //     , 576: {
      //         items: 1
      //     }
      //     , 768: {
      //         items: 1
      //     }
      //     , 992: {
      //         items: 1
      //     }
      //     , 1200: {
      //         items: 2
      //     }
      // },
      margin: 10,
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return __jsx("div", {
      className: "section-8  flex-column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "section-title section-title-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, "What"), __jsx("div", {
      className: "section-title section-title-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, "They Say"), this.state.display ? __jsx("div", {
      className: "owl-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 21
      }
    }, __jsx(OwlCarousel, {
      className: "owl-theme",
      margin: this.state.margin,
      autoplay: true,
      autoWidth: true,
      responsive: this.state.responsive,
      loop: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "item ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "comment-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "comment-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "comment-box-pic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "../../static/images/section-8/client-1.png",
      alt: "client-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 45
      }
    })), __jsx("div", {
      className: "comment-box-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "comment-box-words",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 45
      }
    }, "\u201CProfessional work yeilding excellent results! Great Job.\u201D"), __jsx("div", {
      className: "comment-box-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 45
      }
    }, "Balaji Parami1 "), __jsx("div", {
      className: "comment-box-company",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 45
      }
    }, "CEO Cloudknox "))))), __jsx("div", {
      className: "item ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "comment-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "comment-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "comment-box-pic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "../../static/images/section-8/client-1.png",
      alt: "client-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 45
      }
    })), __jsx("div", {
      className: "comment-box-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "comment-box-words",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 45
      }
    }, "\u201CProfessional work yeilding excellent results! Great Job.\u201D"), __jsx("div", {
      className: "comment-box-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 45
      }
    }, "Balaji Parami1 "), __jsx("div", {
      className: "comment-box-company",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 45
      }
    }, "CEO Cloudknox "))))), __jsx("div", {
      className: "item ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "comment-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "comment-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "comment-box-pic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "../../static/images/section-8/client-1.png",
      alt: "client-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 45
      }
    })), __jsx("div", {
      className: "comment-box-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "comment-box-words",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 45
      }
    }, "\u201CProfessional work yeilding excellent results! Great Job.\u201D"), __jsx("div", {
      className: "comment-box-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 45
      }
    }, "Balaji Parami1 "), __jsx("div", {
      className: "comment-box-company",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 45
      }
    }, "CEO Cloudknox "))))), __jsx("div", {
      className: "item ",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "comment-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "comment-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "comment-box-pic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 41
      }
    }, __jsx("img", {
      src: "../../static/images/section-8/client-1.png",
      alt: "client-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 45
      }
    })), __jsx("div", {
      className: "comment-box-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "comment-box-words",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 45
      }
    }, "\u201CProfessional work yeilding excellent results! Great Job.\u201D"), __jsx("div", {
      className: "comment-box-name",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 45
      }
    }, "Balaji Parami1 "), __jsx("div", {
      className: "comment-box-company",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 45
      }
    }, "CEO Cloudknox ")))))), " ") : __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 49
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Apps);

/***/ }),

/***/ "./components/Section-9-Services/ServiceCard.js":
/*!******************************************************!*\
  !*** ./components/Section-9-Services/ServiceCard.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-9-Services\\ServiceCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const serviceCard = props => __jsx("div", {
  className: "service-card flex-row",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "service-pic",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 9
  }
}, __jsx("img", {
  src: props.children.image,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 13
  }
})), __jsx("div", {
  className: "info-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "service-name",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
}, props.children.name), __jsx("div", {
  className: "service-info",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }
}, props.children.about)));

/* harmony default export */ __webpack_exports__["default"] = (serviceCard);

/***/ }),

/***/ "./components/Section-9-Services/Services.css":
/*!****************************************************!*\
  !*** ./components/Section-9-Services/Services.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Section-9-Services/Services.js":
/*!***************************************************!*\
  !*** ./components/Section-9-Services/Services.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services.css */ "./components/Section-9-Services/Services.css");
/* harmony import */ var _Services_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Services_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.js */ "./components/Section-9-Services/data.js");
/* harmony import */ var _ServiceCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServiceCard */ "./components/Section-9-Services/ServiceCard.js");
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\components\\Section-9-Services\\Services.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Services = () => {
  const serviceItems = _data_js__WEBPACK_IMPORTED_MODULE_2__["default"].map(service => __jsx(_ServiceCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: service.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, service));
  return __jsx("div", {
    className: "section-9 grey ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container flex-column  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "section-title section-title-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, "Other"), __jsx("div", {
    className: "section-title section-title-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Services"), __jsx("div", {
    className: "section-9-container flex-wrap-row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, serviceItems)));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./components/Section-9-Services/data.js":
/*!***********************************************!*\
  !*** ./components/Section-9-Services/data.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const links = [{
  id: 1,
  name: 'Mobile Application Development',
  about: 'The solution powered enterprises to identify and right-size any identity.',
  image: "../../static/images/section-9/web-application.png"
}, {
  id: 2,
  name: 'UI/UX Design',
  about: 'The solution powered enterprises to identify and right-size any identity.',
  image: "../../static/images/section-9/ui-ux.png"
}, {
  id: 3,
  name: 'Cloud Solutions',
  about: 'The solution powered enterprises to identify and right-size any identity.',
  image: "../../static/images/section-9/cloud-solutions.png"
}, {
  id: 4,
  name: 'Quality Analysis Services',
  about: 'Modern tools & scientific processes to check, verify & validate; All with one goal in mind. Quality of your product',
  image: "../../static/images/section-9/quality-analysis-services.png"
}];
/* harmony default export */ __webpack_exports__["default"] = (links);

/***/ }),

/***/ "./css/fonts.min.css":
/*!***************************!*\
  !*** ./css/fonts.min.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/owl.carousel/dist/assets/owl.carousel.css":
/*!****************************************************************!*\
  !*** ./node_modules/owl.carousel/dist/assets/owl.carousel.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/owl.carousel/dist/assets/owl.theme.default.css":
/*!*********************************************************************!*\
  !*** ./node_modules/owl.carousel/dist/assets/owl.theme.default.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/Common.css":
/*!**************************!*\
  !*** ./pages/Common.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _Common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Common.css */ "./pages/Common.css");
/* harmony import */ var _Common_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Common_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Section_1_Cover_Cover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section-1-Cover/Cover */ "./components/Section-1-Cover/Cover.js");
/* harmony import */ var _components_Section_2_Offering_Offering__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section-2-Offering/Offering */ "./components/Section-2-Offering/Offering.js");
/* harmony import */ var _components_Section_3_ChooseUs_ChooseUs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Section-3-ChooseUs/ChooseUs */ "./components/Section-3-ChooseUs/ChooseUs.js");
/* harmony import */ var _components_Section_4_DevProcess_DevProcess__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Section-4-DevProcess/DevProcess */ "./components/Section-4-DevProcess/DevProcess.js");
/* harmony import */ var _components_Section_5_Industries_Industries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Section-5-Industries/Industries */ "./components/Section-5-Industries/Industries.js");
/* harmony import */ var _components_Section_6_PortFolio_PortFolio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Section-6-PortFolio/PortFolio */ "./components/Section-6-PortFolio/PortFolio.js");
/* harmony import */ var _components_Section_7_Clients_Clients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Section-7-Clients/Clients */ "./components/Section-7-Clients/Clients.js");
/* harmony import */ var _components_Section_8_TheySay_TheySay__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Section-8-TheySay/TheySay */ "./components/Section-8-TheySay/TheySay.js");
/* harmony import */ var _components_Section_9_Services_Services__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Section-9-Services/Services */ "./components/Section-9-Services/Services.js");
/* harmony import */ var _components_Section_10_Insights_Insights__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Section-10-Insights/Insights */ "./components/Section-10-Insights/Insights.js");
/* harmony import */ var _components_Section_11_Questions_Questions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Section-11-Questions/Questions */ "./components/Section-11-Questions/Questions.js");
/* harmony import */ var _components_Form_Form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Form/Form */ "./components/Form/Form.js");
/* harmony import */ var _components_AllServices_AllServices__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/AllServices/AllServices */ "./components/AllServices/AllServices.js");
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.js");
/* harmony import */ var _css_fonts_min_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../css/fonts.min.css */ "./css/fonts.min.css");
/* harmony import */ var _css_fonts_min_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_css_fonts_min_css__WEBPACK_IMPORTED_MODULE_17__);
var _jsxFileName = "D:\\CHirag\\codecraft-new-website-next\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


















class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 10
      }
    }, "hello");
  }

}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CHirag\codecraft-new-website-next\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-owl-carousel":
/*!*************************************!*\
  !*** external "react-owl-carousel" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map