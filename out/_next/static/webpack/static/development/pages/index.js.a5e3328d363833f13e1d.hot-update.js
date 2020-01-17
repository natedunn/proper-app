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

function generateFolders(zip) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function generateFolders$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          zip.folder('proper');
          zip.folder('proper/lib');
          zip.folder('proper/manifest');

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

function generatePresets(zip) {
  var presets, _loop, _i, _presets, _ret;

  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function generatePresets$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          // Presets
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

          _loop = function _loop() {
            var preset;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _loop$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    preset = _presets[_i];
                    _context2.next = 3;
                    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(preset.file).then(function (res) {
                      console.log("Getting from ".concat(preset.file)); // Load presets

                      zip.file(!preset.dir ? "proper/".concat(preset.name) : "proper/".concat(preset.dir, "/").concat(preset.name), res.data);
                    }));

                  case 3:
                    _context2.t0 = _context2.sent;
                    return _context2.abrupt("return", {
                      v: _context2.t0
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          };

          _i = 0, _presets = presets;

        case 3:
          if (!(_i < _presets.length)) {
            _context3.next = 12;
            break;
          }

          _context3.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_loop());

        case 6:
          _ret = _context3.sent;

          if (!(typeof _ret === "object")) {
            _context3.next = 9;
            break;
          }

          return _context3.abrupt("return", _ret.v);

        case 9:
          _i++;
          _context3.next = 3;
          break;

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function generateManifests(queue, zip) {
  var npmItems, composerItems, masItems, caskItems, brewItems;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function generateManifests$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
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
          return _context4.stop();
      }
    }
  });
}

function makeZip(zip) {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function makeZip$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          zip.generateAsync({
            type: 'blob'
          }).then(function (content) {
            Object(file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"])(content, 'proper.zip');
          });

        case 1:
        case "end":
          return _context5.stop();
      }
    }
  });
}

function generateZip(queue) {
  var zip;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function generateZip$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          // New Zip
          zip = new JSZip(); // Create folders

          _context6.prev = 1;
          _context6.next = 4;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(generateFolders(zip));

        case 4:
          _context6.next = 6;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(generatePresets(zip));

        case 6:
          _context6.next = 8;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(generateManifests(queue, zip));

        case 8:
          _context6.next = 10;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(makeZip(zip));

        case 10:
          _context6.next = 15;
          break;

        case 12:
          _context6.prev = 12;
          _context6.t0 = _context6["catch"](1);
          console.log(_context6.t0);

        case 15:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[1, 12]]);
}

/***/ })

})
//# sourceMappingURL=index.js.a5e3328d363833f13e1d.hot-update.js.map