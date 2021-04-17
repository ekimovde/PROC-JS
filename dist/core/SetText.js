"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addText = exports.SetText = void 0;
var SetText = {
  text: ""
};
exports.SetText = SetText;

var addText = function addText(text) {
  SetText.text = text;
};

exports.addText = addText;