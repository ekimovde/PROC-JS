"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Writer = Writer;
exports.save = exports.write = exports.writeLine = exports.writerConst = void 0;

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Writer(path, string) {
  this.path = path;
  this.string = string;
}

var writerConst = function writerConst(path, writer) {
  writer.path = path;
};

exports.writerConst = writerConst;

var writeLine = function writeLine(writer, str) {
  writer.string += str + "\n";
};

exports.writeLine = writeLine;

var write = function write(str, writer) {
  writer.string += str;
};

exports.write = write;

var save = function save(writer) {
  _fs["default"].writeFile(writer.path, writer.string, function (err) {
    if (err) throw err;
  });
};

exports.save = save;