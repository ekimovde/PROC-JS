let container = require("./Container");
let Reader = require("./Reader");
let Writer = require("./Writer");

function main() {
  console.log("Start");

  let writer = new Writer("out.txt");

  writer.writeLine("Start!");

  let reader = new Reader("in.txt");

  container.inFile(reader);
  container.outFile(writer);
  container.clear();
  container.outFile(writer);

  writer.writeLine("Stop!");

  console.log("Stop");

  writer.save();
}

main();
