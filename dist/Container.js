"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clear = exports.outFile = exports.getArray = exports.inFile = exports.container = void 0;

var _inFunc = require("./core/inFunc");

var SetText = require("./core/SetText");

var container = {
  array: []
};
exports.container = container;

var inFile = function inFile(reader) {
  while (!reader.fileEmpty()) {
    var tmp = reader.readLine();
    var setText = new SetText();
    (0, _inFunc.inFunc)(tmp, setText, container.array);
  }
};

exports.inFile = inFile;

var getArray = function getArray(tmp) {
  container.array.push(tmp);
  return array;
};

exports.getArray = getArray;

var outFile = function outFile(writer) {
  var c = container.array.length;
  writer.writeLine("Container contains: ".concat(c, ", elements!"));
  if (c > 0) for (var i = 0; i < c; i++) {
    container.array[i].out(writer);
  }
};

exports.outFile = outFile;

var clear = function clear() {
  container.array = [];
};

exports.clear = clear;