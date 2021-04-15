"use strict";

var _Container = require("./Container");

var _Reader = require("./Reader");

var _Writer = require("./Writer");

function main() {
  console.log("Start");
  var writer = new _Writer.Writer("out.txt", "");
  (0, _Writer.writerConst)("out.txt", writer);
  (0, _Writer.writeLine)(writer, "Start!");
  var container = (0, _Container.containerConst)();
  var reader = new _Reader.Reader("in.txt", "", 0);
  (0, _Reader.readerConst)("in.txt", reader);
  (0, _Container.containerIn)(container, reader);
  (0, _Container.containerOut)(container, writer);
  (0, _Container.containerClear)(container);
  (0, _Writer.writeLine)(writer, "Stop!");
  console.log("Stop");
  (0, _Writer.save)(writer);
}

main();