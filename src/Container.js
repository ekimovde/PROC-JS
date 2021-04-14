let SetText = require("./core/SetText");
import { inFunc } from "./core/inFunc";

export let container = {
  array: [],
};

export const inFile = (reader) => {
  while (!reader.fileEmpty()) {
    let tmp = reader.readLine();
    let setText = new SetText();

    inFunc(tmp, setText, container.array);
  }
};

export const getArray = (tmp) => {
  container.array.push(tmp);
  return array;
};

export const outFile = (writer) => {
  let c = container.array.length;

  writer.writeLine(`Container contains: ${c}, elements!`);

  if (c > 0)
    for (let i = 0; i < c; i++) {
      container.array[i].out(writer);
    }
};

export const clear = () => {
  container.array = [];
};
