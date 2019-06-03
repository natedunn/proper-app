webpackHotUpdate("static/development/pages/how.js",{

/***/ "./components/nav.js":
/*!***************************!*\
  !*** ./components/nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var tailwindcss_defaultTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tailwindcss/defaultTheme */ "./node_modules/tailwindcss/defaultTheme.js");
/* harmony import */ var tailwindcss_defaultTheme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_defaultTheme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package.json */ "./package.json", 1);

var _jsxFileName = "/Users/nathandunn/Personal/proper-app/components/nav.js";

/**
 * TODO: Dynamically set up links
 */





var Logo = function Logo(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    fill: "none",
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M9.2.6h47.6c6.8 0 13.367.667 19.7 2 6.333 1.333 11.9 3.567 16.7 6.7s8.633 7.333 11.5 12.6c2.867 5.267 4.3 11.833 4.3 19.7 0 8.933-1.533 16.133-4.6 21.6-3.067 5.467-7.2 9.7-12.4 12.7S80.767 80.933 73.9 82c-6.867 1.067-14.033 1.6-21.5 1.6h-18v58.6H9.2V.6zM49.6 62c3.6 0 7.333-.133 11.2-.4 3.867-.267 7.433-1.067 10.7-2.4 3.267-1.333 5.933-3.333 8-6s3.1-6.4 3.1-11.2c0-4.4-.933-7.9-2.8-10.5-1.867-2.6-4.267-4.6-7.2-6-2.933-1.4-6.2-2.3-9.8-2.7-3.6-.4-7.067-.6-10.4-.6h-18V62h15.2z",
    fill: "#BAA0E4",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M.2.6h47.6c6.8 0 13.367.667 19.7 2 6.333 1.333 11.9 3.567 16.7 6.7s8.633 7.333 11.5 12.6c2.867 5.267 4.3 11.833 4.3 19.7 0 8.933-1.533 16.133-4.6 21.6-3.067 5.467-7.2 9.7-12.4 12.7S71.767 80.933 64.9 82c-6.867 1.067-14.033 1.6-21.5 1.6h-18v58.6H.2V.6zM40.6 62c3.6 0 7.333-.133 11.2-.4 3.867-.267 7.433-1.067 10.7-2.4 3.267-1.333 5.933-3.333 8-6s3.1-6.4 3.1-11.2c0-4.4-.933-7.9-2.8-10.5-1.867-2.6-4.267-4.6-7.2-6-2.933-1.4-6.2-2.3-9.8-2.7-3.6-.4-7.067-.6-10.4-.6h-18V62h15.2z",
    fill: "#733DC8",
    __self: this
  })));
};

Logo.defaultProps = {
  viewBox: "0 0 109 143",
  xmlns: "http://www.w3.org/2000/svg"
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "nav__Container",
  componentId: "sc-1k8xxhw-0"
})(["max-width:", ";margin-left:auto;margin-right:auto;"], tailwindcss_defaultTheme__WEBPACK_IMPORTED_MODULE_4___default.a.maxWidth['4xl']);
var NavItems = [{
  url: '/about',
  text: 'About'
}, {
  url: '/how',
  text: 'How to use'
}, {
  url: '/about#contribute',
  text: 'Contribute'
}];

var Nav = function Nav() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "bg-white shadow-lg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    className: "flex items-center justify-between py-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "font-bold flex items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Logo, {
    className: "w-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "-mr-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, NavItems.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index,
      className: "inline-block mr-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      prefetch: true,
      href: item.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "text-purple-600 tracking-wide text-sm font-bold hover:text-purple-700 border-b-2 border-purple-200 hover:border-purple-400",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, item.text)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://github.com/minamarkham/formation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "text-sm text-purple-600 tracking-wide hover:text-purple-800 border-b-2 border-purple-200 hover:border-purple-400",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "v ", _package_json__WEBPACK_IMPORTED_MODULE_5__.version))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=how.js.998efa6b127f2ea8327d.hot-update.js.map