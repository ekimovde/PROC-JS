"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reader = Reader;
exports.fileEmpty = exports.readLine = exports.readerConst = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Reader(path, data, index) {
  this.path = path;
  this.data = data;
  this.index = index;
}

var readerConst = function readerConst(path, reader) {
  reader.path = path;
  reader.data = _fs["default"].readFileSync(path, "utf-8").toString().split("\n");
  reader.index = 0;
};

exports.readerConst = readerConst;

var readLine = function readLine(reader) {
  var tmp = reader.data[reader.index];
  reader.index++;
  return tmp;
};

exports.readLine = readLine;

var fileEmpty = function fileEmpty(reader) {
  return reader.index > reader.data.length - 1 ? true : false;
  s;
};

exports.fileEmpty = fileEmpty;