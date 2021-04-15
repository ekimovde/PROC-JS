"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outSetText = exports.addText = exports.SetText = void 0;

var _this = void 0;

var SetText = {
  text: ""
};
exports.SetText = SetText;

var addText = function addText(text) {
  SetText.text = text;
};

exports.addText = addText;

var outSetText = function outSetText(writer) {
  writer.write("Text: ".concat(_this.text, ", "));
};

exports.outSetText = outSetText;