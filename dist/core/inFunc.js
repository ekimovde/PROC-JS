"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replacementIn = exports.shiftIn = void 0;

var _encryption = require("../utils/encryption");

var shiftIn = function shiftIn(tmp, shift, text) {
  shift.text = text;

  var _shiftFunc = (0, _encryption.shiftFunc)(tmp),
      shiftTmp = _shiftFunc.shiftTmp,
      strEncoded = _shiftFunc.strEncoded;

  shift.shift = shiftTmp;
  shift.decodedText = strEncoded;
};

exports.shiftIn = shiftIn;

var replacementIn = function replacementIn(tmp, replacement, text) {
  replacement.text = text;

  var _replaceFunc = (0, _encryption.replaceFunc)(tmp),
      replaceTmp = _replaceFunc.replaceTmp,
      replaceText = _replaceFunc.replaceText;

  replacement.replacement = replaceTmp.join("-");
  replacement.decodedText = replaceText;
};

exports.replacementIn = replacementIn;