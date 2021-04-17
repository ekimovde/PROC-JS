"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceNumberOut = exports.shiftOut = exports.replaceOut = void 0;

var _Writer = require("../Writer");

var replaceOut = function replaceOut(container, i, writer) {
  (0, _Writer.writeLine)(writer, "Text: ".concat(container[i].text, ", Replacement: ").concat(container[i].replacement, ", DecodedText: ").concat(container[i].decodedText));
};

exports.replaceOut = replaceOut;

var shiftOut = function shiftOut(container, i, writer) {
  (0, _Writer.writeLine)(writer, "Text: ".concat(container[i].text, ", Shift: ").concat(container[i].shift, ", DecodedText: ").concat(container[i].decodedText));
};

exports.shiftOut = shiftOut;

var replaceNumberOut = function replaceNumberOut(container, i, writer) {
  (0, _Writer.writeLine)(writer, "Text: ".concat(container[i].text, ", ReplaceNumber: ").concat(container[i].replaceNumber, ", DecodedText: ").concat(container[i].decodedText));
};

exports.replaceNumberOut = replaceNumberOut;