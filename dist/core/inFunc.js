"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceNumberIn = exports.shiftIn = exports.replacementIn = void 0;

var _encryption = require("../utils/encryption");

var replacementIn = function replacementIn(tmp, replacement, text, name) {
  replacement.text = text;

  var _replaceFunc = (0, _encryption.replaceFunc)(tmp),
      replaceTmp = _replaceFunc.replaceTmp,
      replaceText = _replaceFunc.replaceText;

  replacement.replacement = replaceTmp.join("-");
  replacement.decodedText = replaceText;
  replacement.name = name;
};

exports.replacementIn = replacementIn;

var shiftIn = function shiftIn(tmp, shift, text, name) {
  shift.text = text;

  var _shiftFunc = (0, _encryption.shiftFunc)(tmp),
      shiftTmp = _shiftFunc.shiftTmp,
      strEncoded = _shiftFunc.strEncoded;

  shift.shift = shiftTmp;
  shift.decodedText = strEncoded;
  shift.name = name;
};

exports.shiftIn = shiftIn;

var replaceNumberIn = function replaceNumberIn(tmp, replacement, text, name) {
  replacement.text = text;

  var _replaceFunc2 = (0, _encryption.replaceFunc)(tmp),
      replaceTmp = _replaceFunc2.replaceTmp,
      replaceText = _replaceFunc2.replaceText;

  replacement.replaceNumber = replaceTmp.join("-");
  replacement.decodedText = replaceText;
  replacement.name = name;
};

exports.replaceNumberIn = replaceNumberIn;