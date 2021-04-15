import { readLine, fileEmpty } from "./Reader";
import { writeLine } from "./Writer";
import { inText, outText } from "./core/funcText";

export const containerConst = () => {
  let container = [];

  return container;
};

export const containerIn = (container, reader) => {
  while (!fileEmpty(reader)) {
    let tmp = readLine(reader);
    inText(tmp, container);
  }
};

export const containerOut = (container, writer) => {
  let c = container.length;
  writeLine(writer, `Container contains: ${c}, elements!`);

  if (c > 0)
    for (let i = 0; i < c; i++) {
      outText(container, i, writer);
    }
};

export const containerClear = (container) => {
  container = [];
};
