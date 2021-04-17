"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Shift;

function Shift(text, shift, decodedText, name) {
  this.text = text;
  this.shift = shift;
  this.decodedText = decodedText;
  this.name = name;
}