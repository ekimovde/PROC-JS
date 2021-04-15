"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Replacement;

function Replacement(text, replacement, decodedText) {
  this.text = text;
  this.replacement = replacement;
  this.decodedText = decodedText;
}