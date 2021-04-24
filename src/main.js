import {
  containerIn,
  containerOut,
  containerOutReplacement,
  containerConst,
  containerClear,
  containerSort,
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

  try {
    readerConst("in.txt", reader);
    containerIn(container, reader);
    containerOut(container, writer);
    containerSort(container);
    containerOut(container, writer);
    containerOutReplacement(container, writer);
    containerClear(container);

    writeLine(writer, "Stop!");

    console.log("Stop");

    save(writer);
  } catch (error) {
    console.log(error);
  }
}

main();
