"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outText = exports.inText = void 0;

var _Replacement = _interopRequireDefault(require("./Replacement"));

var _Shift = _interopRequireDefault(require("./Shift"));

var _inFunc = require("./inFunc");

var _outFunc = require("./outFunc");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var inText = function inText(tmp, container) {
  switch (tmp[0]) {
    case "1":
      var replacement = new _Replacement["default"]();
      (0, _inFunc.replacementIn)(tmp.toString().split(" "), replacement, tmp.split(" ")[1].replace(/\r/g, ""));
      container.push(replacement);
      break;

    case "2":
      var shift = new _Shift["default"]();
      (0, _inFunc.shiftIn)(tmp.toString().split(" "), shift, tmp.split(" ")[1]);
      container.push(shift);
      break;

    default:
      return 0;
  }
};

exports.inText = inText;

var outText = function outText(container, i, writer) {
  var objectKeys = Object.keys(container[i]);

  switch (objectKeys[1]) {
    case "replacement":
      (0, _outFunc.replaceOut)(container, i, writer);
      break;

    case "shift":
      (0, _outFunc.shiftOut)(container, i, writer);
      break;

    default:
      break;
  }
};

exports.outText = outText;