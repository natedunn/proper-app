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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




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
  var zip, presets, generatePresets, generateManifests;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function generateZip$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          generateManifests = function _ref2() {
            var npmItems, composerItems, masItems, caskItems, brewItems;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function generateManifests$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // Get Zip Data
                    npmItems = queue.filter(function (item) {
                      return item.origin.id.toLowerCase() === 'npm';
                    });
                    composerItems = queue.filter(function (item) {
                      return item.origin.id.toLowerCase() === 'composer';
                    });
                    masItems = queue.filter(function (item) {
                      return item.origin.id.toLowerCase() === 'mas';
                    });
                    caskItems = queue.filter(function (item) {
                      return item.origin.id.toLowerCase() === 'cask';
                    });
                    brewItems = queue.filter(function (item) {
                      return item.origin.id.toLowerCase() === 'homebrew';
                    });
                    setManifestData('npm', npmItems, zip);
                    setManifestData('composer', composerItems, zip);
                    setManifestData('apps', masItems, zip);
                    setManifestData('casks', caskItems, zip);
                    setManifestData('brews', brewItems, zip);

                  case 10:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          };

          generatePresets = function _ref() {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function generatePresets$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    presets.forEach(function (preset) {
                      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(preset.file).then(function (response) {
                        // Load presets
                        zip.file(!preset.dir ? "proper/".concat(preset.name) : "proper/".concat(preset.dir, "/").concat(preset.name), response.data);
                      })["catch"](function (error) {
                        return console.log(error);
                      });
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            });
          };

          // New Zip
          zip = new JSZip(); // Create folders

          zip.folder('proper');
          zip.folder('proper/lib');
          zip.folder('proper/manifest'); // Set Presets

          presets = [{
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
          generatePresets().then(function () {
            generateManifests();
          }).then(function (zip) {
            zip.generateAsync({
              type: 'blob'
            }).then(function (content) {
              Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(content, 'proper.zip');
            });
          });

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
}

/***/ })

})
//# sourceMappingURL=index.js.8d1367eda2d54da5cf79.hot-update.js.map