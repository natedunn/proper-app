webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/search */ "./components/search.js");
/* harmony import */ var _components_queue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/queue */ "./components/queue.js");
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/button */ "./components/button.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var tailwindcss_defaultTheme__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tailwindcss/defaultTheme */ "./node_modules/tailwindcss/defaultTheme.js");
/* harmony import */ var tailwindcss_defaultTheme__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_defaultTheme__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utils/fetch */ "./utils/fetch.js");
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utils/helper */ "./utils/helper.js");










var _jsxFileName = "/Users/nathandunn/Personal/proper-app/pages/index.js";
// Deps

 // Components





 // Theme


 // Imported


 // ? Does this belong here?

var pageInfo = {
  title: 'Proper | Generate Your Scripts'
};
var Container = styled_components__WEBPACK_IMPORTED_MODULE_17__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-37b9r8-0"
})(["max-width:", ";margin-left:auto;margin-right:auto;"], tailwindcss_defaultTheme__WEBPACK_IMPORTED_MODULE_18___default.a.maxWidth['4xl']);

var Home =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(Home, _Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Home).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "resetResults", function () {
      _this.setState({
        results: []
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "resetTerm", function () {
      _this.setState({
        term: ''
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "resetQueue", function () {
      _this.setState({
        queue: []
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "onOriginChange", function (event) {
      var target = event.target;
      var selectedValue = target.value;
      var selectedText = target.options[target.selectedIndex].text;

      if (selectedValue) {
        _this.setState({
          origin: {
            name: selectedText,
            id: selectedValue
          }
        });
      }

      _this.resetResults();

      _this.resetTerm();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "handleSearchChange", function (event) {
      var origin = _this.state.origin;
      var value = event.target.value;

      _this.setState({
        term: value.trim(),
        loading: true
      });

      if (!value.trim().length) {
        _this.resetResults();
      } else {
        _this.resetResults();

        Object(_utils_fetch__WEBPACK_IMPORTED_MODULE_19__["getData"])(value.trim(), origin.id).then(function (results) {
          if (results && results.length) _this.setState({
            results: results,
            loading: false
          });
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "addToQueue", function (item) {
      var _this$state = _this.state,
          origin = _this$state.origin,
          queue = _this$state.queue;
      var name = item.name,
          ver = item.ver;

      _this.setState({
        queue: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(queue), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, queue[name], {
          name: name,
          origin: origin,
          ver: ver
        })])
      });

      _this.setState({
        term: '',
        results: []
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "deleteItem", function (key) {
      var queue = _this.state.queue;

      _this.setState({
        queue: queue.filter(function (_, i) {
          return i !== key;
        })
      });
    });

    _this.state = {
      term: '',
      origin: {},
      queue: [],
      results: [],
      loading: false
    };
    _this.deleteItem = _this.deleteItem.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, [{
    key: "render",
    value: function render() {
      var queue = this.state.queue;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: pageInfo.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "text-center mt-16 mb-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "text-4xl font-medium mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Work with your machine, not against it."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "Get started by creating your script below or directly", ' ', react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        href: "https://github.com/useproper/proper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "text-purple-600 tracking-wide hover:text-purple-800 border-b-2 border-purple-200 hover:border-purple-400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "forking the repo")), ".")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_search__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
        addToQueue: this.addToQueue,
        handleSearchChange: this.handleSearchChange,
        handleSearchKeyDown: this.handleSearchKeyDown,
        onOriginChange: this.onOriginChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_queue__WEBPACK_IMPORTED_MODULE_15__["default"], {
        items: queue,
        deleteItem: this.deleteItem,
        generateZip: _utils_helper__WEBPACK_IMPORTED_MODULE_20__["generateZip"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "text-sm mt-6 text-center text-gray-600",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "Made by", ' ', react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
        prefetch: true,
        href: "https://twitter.com/natedunn",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "text-purple-600 tracking-wide hover:text-purple-800 border-b-2 border-purple-200 hover:border-purple-400",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, "@natedunn")))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.a1678ab45af344978ad7.hot-update.js.map