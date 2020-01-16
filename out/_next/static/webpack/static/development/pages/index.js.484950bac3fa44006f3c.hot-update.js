webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/queueItem.js":
/*!*********************************!*\
  !*** ./components/queueItem.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return QueueItem; });
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







var _jsxFileName = "/Users/nathandunn/Development/web/projects/proper-app/components/queueItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



var _tailwindConfig = tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_7___default.a.resolveConfig(_tailwind_config_js__WEBPACK_IMPORTED_MODULE_8___default.a);




var _StyledDiv = styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({
  displayName: "queueItem___StyledDiv",
  componentId: "sc-1gvu4xw-0"
})(["", ""], function (p) {
  return p._css;
});

var QueueItem =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(QueueItem, _Component);

  function QueueItem() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, QueueItem);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(QueueItem).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(QueueItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          index = _this$props.index,
          deleteItem = _this$props.deleteItem;
      return __jsx("li", {
        className: "py-6 px-8 mb-2 flex items-center justify-between rounded border border-gray-400 bg-white",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("div", {
        className: "inline-block mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, item.name), __jsx("div", {
        className: "flex items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, __jsx("div", {
        className: "inline-block px-2 py-1 rounded bg-gray-400 text-xs mr-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, item.origin.name), __jsx(_StyledDiv, {
        _css: _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({
          "paddingLeft": _tailwindConfig.theme.padding["2"],
          "paddingRight": _tailwindConfig.theme.padding["2"],
          "paddingTop": _tailwindConfig.theme.padding["1"],
          "paddingBottom": _tailwindConfig.theme.padding["1"],
          "borderRadius": _tailwindConfig.theme.borderRadius["default"]
        }, tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_7___default.a.resolveStyle(_tailwindConfig, [{
          "prop": "backgroundColor",
          "config": "backgroundColor"
        }, {
          "prop": "backgroundSize",
          "config": "backgroundSize"
        }, {
          "prop": "backgroundPosition",
          "config": "backgroundPosition"
        }], "gray-300"), tailwind_macro_utils_umd_js__WEBPACK_IMPORTED_MODULE_7___default.a.resolveStyle(_tailwindConfig, [{
          "prop": "color",
          "config": "textColor"
        }, {
          "prop": "fontSize",
          "config": "fontSize"
        }], "xs"), {
          "marginRight": _tailwindConfig.theme.margin["3"]
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, item.ver ? "v".concat(item.ver) : null), __jsx("button", {
        className: "bg-red-200 text-red-500 hover:bg-red-500 hover:text-white font-bold py-1 px-2 text-xs rounded flex items-center",
        onClick: function onClick() {
          deleteItem(index);
        },
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "\xD7")));
    }
  }]);

  return QueueItem;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);


QueueItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.object,
  index: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number,
  deleteItem: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
};

/***/ })

})
//# sourceMappingURL=index.js.484950bac3fa44006f3c.hot-update.js.map