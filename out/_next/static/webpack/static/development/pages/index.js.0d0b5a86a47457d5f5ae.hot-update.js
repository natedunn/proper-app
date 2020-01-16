webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/queue.js":
/*!*****************************!*\
  !*** ./components/queue.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Queue; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tailwind.macro/utils.umd.js */ "./node_modules/tailwind.macro/utils.umd.js");
/* harmony import */ var tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../tailwind.config.js */ "./tailwind.config.js");
/* harmony import */ var _tailwind_config_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _queueItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./queueItem */ "./components/queueItem.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./button */ "./components/button.js");
/* harmony import */ var _heading__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./heading */ "./components/heading.js");










var _jsxFileName = "/Users/nathandunn/Development/web/projects/proper-app/components/queue.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



var _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_7___default.a.resolveConfig(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_8___default.a);







var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "queue___StyledDiv",
  componentId: "sc-4mxwog-0"
})(["", ""], function (p) {
  return p._css;
});

var _StyledUl = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].ul.withConfig({
  displayName: "queue___StyledUl",
  componentId: "sc-4mxwog-1"
})(function (p) {
  return {
    "display": "inline-block",
    "width": p._css2
  };
});

var _StyledDiv2 = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "queue___StyledDiv2",
  componentId: "sc-4mxwog-2"
})(function (p) {
  return {
    "paddingTop": p._css3,
    "paddingBottom": p._css4,
    "textAlign": "right",
    "display": "flex",
    "justifyContent": "flex-end",
    "alignItems": "center"
  };
});

var _StyledButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(_button__WEBPACK_IMPORTED_MODULE_12__["default"]).withConfig({
  displayName: "queue___StyledButton",
  componentId: "sc-4mxwog-3"
})({
  "display": "inline-flex",
  "alignItems": "center"
});

var Queue =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Queue, _Component);

  function Queue() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Queue);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Queue).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Queue, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          items = _this$props.items,
          deleteItem = _this$props.deleteItem,
          generateZip = _this$props.generateZip;
      if (items.length) return __jsx(_StyledDiv, {
        _css: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
          "marginTop": _tailwindConfig.theme.margin["8"],
          "paddingLeft": _tailwindConfig.theme.padding["8"],
          "paddingRight": _tailwindConfig.theme.padding["8"],
          "paddingTop": _tailwindConfig.theme.padding["8"],
          "paddingBottom": _tailwindConfig.theme.padding["8"],
          "borderRadius": _tailwindConfig.theme.borderRadius["default"]
        }, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_7___default.a.resolveStyle(_tailwindConfig, [{
          "prop": "borderWidth",
          "config": "borderWidth"
        }, {
          "prop": "borderColor",
          "config": "borderColor"
        }], "default"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_7___default.a.resolveStyle(_tailwindConfig, [{
          "prop": "borderWidth",
          "config": "borderWidth"
        }, {
          "prop": "borderColor",
          "config": "borderColor"
        }], "purple-300"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_7___default.a.resolveStyle(_tailwindConfig, [{
          "prop": "backgroundColor",
          "config": "backgroundColor"
        }, {
          "prop": "backgroundSize",
          "config": "backgroundSize"
        }, {
          "prop": "backgroundPosition",
          "config": "backgroundPosition"
        }], "purple-100")),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(_heading__WEBPACK_IMPORTED_MODULE_13__["H2"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Queued Items"), __jsx(_StyledUl, {
        _css2: _tailwindConfig.theme.width["full"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, items.map(function (item, index) {
        return __jsx(_queueItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
          key: index,
          item: item,
          index: index,
          deleteItem: deleteItem,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        });
      })), __jsx(_StyledDiv2, {
        _css3: _tailwindConfig.theme.padding["8"],
        _css4: _tailwindConfig.theme.padding["8"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, __jsx(_StyledButton, {
        onClick: function onClick() {
          generateZip(items);
        },
        disabled: !items.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("svg", {
        className: "fill-current w-4 h-4 mr-2",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx("path", {
        d: "M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      })), __jsx("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Download"))));
      return null;
    }
  }]);

  return Queue;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);


Queue.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  deleteItem: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  generateZip: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};

/***/ })

})
//# sourceMappingURL=index.js.0d0b5a86a47457d5f5ae.hot-update.js.map