webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/helper.js":
/*!*************************!*\
  !*** ./utils/helper.js ***!
  \*************************/
/*! exports provided: generateZip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateZip", function() { return generateZip; });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



var JSZip = __webpack_require__(/*! jszip */ "./node_modules/jszip/lib/index.js");

function slugify(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // Make the string lowercase

  str = str.toLowerCase(); // Remove accents, swap ñ for n, etc

  var from = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;";
  var to = "AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------";

  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  } // Remove invalid chars


  str = str.replace(/[^a-z0-9 -]/g, '') // Collapse whitespace and replace by -
  .replace(/\s+/g, '-') // Collapse dashes
  .replace(/-+/g, '-');
  return str;
}

function setManifestData(name, data, zip) {
  if (data.length) {
    var names = [];
    data.forEach(function (item) {
      if (item.origin.id.toLowerCase() === 'mas') {
        names.push("".concat(item.id, "::").concat(slugify(item.name)));
      } else {
        names.push(item.id);
      }
    });
    zip.file("proper/manifest/".concat(name), names.join('\n'));
  }
}

function generateZip(queue) {
  // New Zip
  var zip = new JSZip(); // Create folders

  zip.folder('proper');
  zip.folder('proper/lib');
  zip.folder('proper/manifest'); // Set Presets

  var presets = [{
    name: 'proper',
    dir: false,
    file: 'https://raw.githubusercontent.com/natedunn/proper/master/proper'
  }, {
    name: 'functions',
    dir: false,
    file: 'https://raw.githubusercontent.com/natedunn/proper/master/functions'
  }, {
    name: 'checks',
    dir: 'lib',
    file: 'https://raw.githubusercontent.com/natedunn/proper/master/lib/checks'
  }, {
    name: 'dotfiles',
    dir: 'lib',
    file: 'https://raw.githubusercontent.com/natedunn/proper/master/lib/dotfiles'
  }, {
    name: 'installs',
    dir: 'lib',
    file: 'https://raw.githubusercontent.com/natedunn/proper/master/lib/installs'
  }, {
    name: 'process',
    dir: 'lib',
    file: 'https://raw.githubusercontent.com/natedunn/proper/master/lib/process'
  }, {
    name: 'prompts',
    dir: 'lib',
    file: 'https://raw.githubusercontent.com/natedunn/proper/master/lib/prompts'
  }, {
    name: 'text',
    dir: 'lib',
    file: 'https://raw.githubusercontent.com/natedunn/proper/master/lib/text'
  }, {
    name: 'utilities',
    dir: 'lib',
    file: 'https://raw.githubusercontent.com/natedunn/proper/master/lib/utilities'
  }, {
    name: 'variables',
    dir: 'lib',
    file: 'https://raw.githubusercontent.com/natedunn/proper/master/lib/variables'
  }];

  function generateManifest() {
    // Get Zip Data
    var npmItems = queue.filter(function (item) {
      return item.origin.id.toLowerCase() === 'npm';
    });
    var composerItems = queue.filter(function (item) {
      return item.origin.id.toLowerCase() === 'composer';
    });
    var masItems = queue.filter(function (item) {
      return item.origin.id.toLowerCase() === 'mas';
    });
    var caskItems = queue.filter(function (item) {
      return item.origin.id.toLowerCase() === 'cask';
    });
    var brewItems = queue.filter(function (item) {
      return item.origin.id.toLowerCase() === 'homebrew';
    });
    setManifestData('npm', npmItems, zip);
    setManifestData('composer', composerItems, zip);
    setManifestData('apps', masItems, zip);
    setManifestData('casks', caskItems, zip);
    setManifestData('brews', brewItems, zip); // Generate!

    zip.generateAsync({
      type: 'blob'
    }).then(function (content) {
      Object(file_saver__WEBPACK_IMPORTED_MODULE_0__["saveAs"])(content, 'proper.zip');
    });
  } // Start!


  presets.forEach(function (preset, index) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(preset.file).then(function (response) {
      // Load presets
      zip.file(!preset.dir ? "proper/".concat(preset.name) : "proper/".concat(preset.dir, "/").concat(preset.name), response.data); // After final preset is loaded...

      if (index === presets.length - 1) {
        gererateManifest();
      }
    })["catch"](function (error) {
      return console.log(error);
    });
  });
}

/***/ })

})
//# sourceMappingURL=index.js.4678b4daa64a738281b9.hot-update.js.map