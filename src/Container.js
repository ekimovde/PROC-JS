import { readLine, fileEmpty } from "./Reader";
import { writeLine } from "./Writer";
import { inText, outText } from "./core/funcText";
import { compare } from "./utils/compare";

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
      if (containerFilter(container, i)) {
        outText(container, i, writer);
      }
    }
};

export const containerSort = (container) => {
  container.sort((a, b) => {
    if (compare(a.text, b.text)) {
      return 1;
    } else {
      return -1;
    }
  });
};

export const containerClear = (container) => {
  container = [];
};

export const containerFilter = (container, i) => {
  if (Object.keys(container[i])[1] === "replacement") {
    return true;
  }
};
