"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Replacement;

function Replacement(text, replacement, decodedText, name) {
  this.text = text;
  this.replacement = replacement;
  this.decodedText = decodedText;
  this.name = name;
}