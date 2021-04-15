import {
  containerIn,
  containerOut,
  containerConst,
  containerClear,
} from "./Container";
import { Reader, readerConst } from "./Reader";
import { Writer, writerConst, writeLine, save } from "./Writer";

function main() {
  console.log("Start");

  let writer = new Writer("out.txt", "");
  writerConst("out.txt", writer);
  writeLine(writer, "Start!");

  let container = containerConst();
  let reader = new Reader("in.txt", "", 0);

  readerConst("in.txt", reader);
  containerIn(container, reader);
  containerOut(container, writer);
  containerClear(container);

  writeLine(writer, "Stop!");

  console.log("Stop");

  save(writer);
}

main();
