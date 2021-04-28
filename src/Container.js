import { readLine, fileEmpty } from "./Reader";
import { writeLine } from "./Writer";
import { inText, outText } from "./core/funcText";
import { compare } from "./utils/compare";
import { validate } from "./utils/validate";

export const containerConst = () => {
  let container = [];

  return container;
};

export const containerIn = (container, reader) => {
  while (!fileEmpty(reader)) {
    let tmp = readLine(reader);

    if (validate(tmp)) {
      inText(tmp, container);
    } else {
      console.log("Ошибка в файле!");
    }
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

export const containerOutReplacement = (container, writer) => {
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

export const containerMultiMethod = (container, writer) => {
  let c = container.length;
  writeLine(writer, "MultiMethod");

  for (let i = 0; i < c - 1; i++) {
    for (let j = i + 1; j < c; j++) {
      switch (Object.keys(container[i])[1]) {
        case "shift":
          switch (Object.keys(container[j])[1]) {
            case "shift":
              writeLine(writer, `Are Shift and Shift`);
              break;
            case "replacement":
              writeLine(writer, `Are Shift and Replacement`);
              break;
            default:
              writeLine(writer, `Are Unknown type`);
          }
          break;

        case "replacement":
          switch (Object.keys(container[j])[1]) {
            case "shift":
              writeLine(writer, `Are Replacement and Shift`);
              break;
            case "replacement":
              writeLine(writer, `Are Replacement and Replacement`);
              break;
            default:
              writeLine(writer, `Are Unknown type`);
          }
          break;
      }
    }
  }
};
