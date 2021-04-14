"use strict";

var container = require("./Container");

var Reader = require("./Reader");

var Writer = require("./Writer");

function main() {
  console.log("Start");
  var writer = new Writer("out.txt");
  writer.writeLine("Start!");
  var reader = new Reader("in.txt");
  container.inFile(reader);
  container.outFile(writer);
  container.clear();
  container.outFile(writer);
  writer.writeLine("Stop!");
  console.log("Stop");
  writer.save();
}

main();