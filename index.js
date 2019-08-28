'use strict';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var fetch = _interopDefault(require('node-fetch'));

require('dotenv/config');

var pinyin = _interopDefault(require('pinyin'));

var isChinese = _interopDefault(require('is-chinese'));

var key = process.env.API_KEY;

var getPinyin = function getPinyin(text) {
  var pinyinArray = pinyin(text);
  var newPinyinArray = [];
  pinyinArray.forEach(function (text) {
    newPinyinArray.push(text[0]);
  });
  return newPinyinArray.join('');
};

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
            lang = isChinese(word) ? 'zh-en' : 'en-zh';
            text = isChinese(word) ? encodeURI(word) : word;
            url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=".concat(key, "&text=").concat(text, "&lang=").concat(lang);
            _context.next = 5;
            return fetch(url);

          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();

          case 8:
            json = _context.sent;
            translation = json.text[0].toLowerCase();
            pinyin = isChinese(word) ? getPinyin(word) : getPinyin(translation);
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

var translationIsCorrect =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(prompt, input) {
    var _ref3, translation;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return translate(prompt);

          case 2:
            _ref3 = _context2.sent;
            translation = _ref3.translation;
            return _context2.abrupt("return", input === translation);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function translationIsCorrect(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var toneMapper = {
  1: ['ā', 'ē', 'ī', 'ō', 'ū'],
  2: ['á', 'é', 'í', 'ó', 'ú'],
  3: ['ǎ', 'ě', 'ǐ', 'ǒ', 'ǔ', 'ǚ'],
  4: ['à', 'è', 'ì', 'ò', 'ù', 'ǜ']
};

var mapTone = function mapTone(hanzi) {
  var toneMap = [];
  var pinyinArray = pinyin(hanzi);
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

var toneIsCorrect = function toneIsCorrect(input, character) {
  var correctTone = mapTone(character);
  var answer = Array.isArray(input) ? parseInt(input.join('')) : input;
  return answer === correctTone;
};

exports.getPinyin = getPinyin;
exports.toneIsCorrect = toneIsCorrect;
exports.translate = translate;
exports.translationIsCorrect = translationIsCorrect;
