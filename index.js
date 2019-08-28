"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "translate", {
  enumerable: true,
  get: function get() {
    return _translate.translate;
  }
});
Object.defineProperty(exports, "getPinyin", {
  enumerable: true,
  get: function get() {
    return _translate.getPinyin;
  }
});
Object.defineProperty(exports, "inputIsCorrect", {
  enumerable: true,
  get: function get() {
    return _quiz.inputIsCorrect;
  }
});
Object.defineProperty(exports, "toneIsCorrect", {
  enumerable: true,
  get: function get() {
    return _toneQuiz.toneIsCorrect;
  }
});

var _translate = require("./translate");

var _quiz = require("./quiz");

var _toneQuiz = require("./tone-quiz");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translationIsCorrect = void 0;

var _translate = require("./translate");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var translationIsCorrect =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(prompt, input) {
    var _ref2, translation;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _translate.translate)(prompt);

          case 2:
            _ref2 = _context.sent;
            translation = _ref2.translation;
            return _context.abrupt("return", input === translation);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function translationIsCorrect(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.translationIsCorrect = translationIsCorrect;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toneIsCorrect = void 0;

var _mapTone = require("./utils/mapTone");

var toneIsCorrect = function toneIsCorrect(input, character) {
  var correctTone = (0, _mapTone.mapTone)(character);
  var answer = Array.isArray(input) ? parseInt(input.join('')) : input;
  return answer === correctTone;
};

exports.toneIsCorrect = toneIsCorrect;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPinyin = exports.translate = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

require("dotenv/config");

var _pinyin = _interopRequireDefault(require("pinyin"));

var _isChinese = _interopRequireDefault(require("is-chinese"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var key = process.env.API_KEY;

var getPinyin = function getPinyin(text) {
  var pinyinArray = (0, _pinyin["default"])(text);
  var newPinyinArray = [];
  pinyinArray.forEach(function (text) {
    newPinyinArray.push(text[0]);
  });
  return newPinyinArray.join('');
};

exports.getPinyin = getPinyin;

var translate =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(word) {
    var lang, text, url, response, json, translation, pinyin, translateObject;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            lang = (0, _isChinese["default"])(word) ? 'zh-en' : 'en-zh';
            text = (0, _isChinese["default"])(word) ? encodeURI(word) : word;
            url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=".concat(key, "&text=").concat(text, "&lang=").concat(lang);
            _context.next = 5;
            return (0, _nodeFetch["default"])(url);

          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();

          case 8:
            json = _context.sent;
            translation = json.text[0].toLowerCase();
            pinyin = (0, _isChinese["default"])(word) ? getPinyin(word) : getPinyin(translation);
            translateObject = {
              translation: translation,
              pinyin: pinyin
            };
            return _context.abrupt("return", translateObject);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function translate(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.translate = translate;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mapTone = void 0;

var _pinyin = _interopRequireDefault(require("pinyin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var toneMapper = {
  1: ['ā', 'ē', 'ī', 'ō', 'ū'],
  2: ['á', 'é', 'í', 'ó', 'ú'],
  3: ['ǎ', 'ě', 'ǐ', 'ǒ', 'ǔ', 'ǚ'],
  4: ['à', 'è', 'ì', 'ò', 'ù', 'ǜ']
};

var mapTone = function mapTone(hanzi) {
  var toneMap = [];
  var pinyinArray = (0, _pinyin["default"])(hanzi);
  pinyinArray.forEach(function (array) {
    var singleWord = array[0];
    var letterArray = singleWord.split('');
    letterArray.forEach(function (letter) {
      Object.entries(toneMapper).forEach(function (array) {
        if (array[1].includes(letter)) {
          toneMap.push(array[0]);
        }
      });
    });
  });
  return parseInt(toneMap.join(""));
};

exports.mapTone = mapTone;
