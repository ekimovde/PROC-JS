import { readLine, fileEmpty } from "./Reader";
import { writeLine } from "./Writer";
import { inText, outText } from "./core/funcText";
import { compare } from "./utils/compare";
import { validate } from "./utils/validate";
import { replaceOut, shiftOut, replaceNumberOut } from "./core/outFunc";

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
        case "replacement":
          switch (Object.keys(container[j])[1]) {
            case "replacement":
              replaceOut(container, i, writer);
              replaceOut(container, j, writer);

              writeLine(
                writer,
                `Element ${i} and ${j} Are Replacement and Replacement`
              );
              break;
            case "shift":
              replaceOut(container, i, writer);
              shiftOut(container, j, writer);

              writeLine(
                writer,
                `Element ${i} and ${j} Are Replacement and Shift`
              );
              break;
            case "replaceNumber":
              replaceOut(container, i, writer);
              replaceNumberOut(container, j, writer);

              writeLine(
                writer,
                `Element ${i} and ${j} Are Replacement and ReplaceNumber`
              );
              break;
            default:
              writeLine(writer, `Element ${i} and ${j} Are Unknown type`);
          }
          break;

        case "shift":
          switch (Object.keys(container[j])[1]) {
            case "replacement":
              shiftOut(container, i, writer);
              replaceOut(container, j, writer);

              writeLine(
                writer,
                `Element ${i} and ${j} Are Shift and Replacement`
              );
              break;
            case "shift":
              shiftOut(container, i, writer);
              shiftOut(container, j, writer);

              writeLine(writer, `Element ${i} and ${j} Are Shift and Shift`);
              break;
            case "replaceNumber":
              shiftOut(container, i, writer);
              replaceNumberOut(container, j, writer);

              writeLine(
                writer,
                `Element ${i} and ${j} Are Shift and ReplaceNumber`
              );
              break;
            default:
              writeLine(writer, `Element ${i} and ${j} Are Unknown type`);
          }
          break;

        case "replaceNumber":
          switch (Object.keys(container[j])[1]) {
            case "replacement":
              replaceNumberOut(container, i, writer);
              replaceOut(container, j, writer);

              writeLine(
                writer,
                `Element ${i} and ${j} Are ReplaceNumber and Replacement`
              );
              break;
            case "shift":
              replaceNumberOut(container, i, writer);
              shiftOut(container, j, writer);

              writeLine(
                writer,
                `Element ${i} and ${j} Are ReplaceNumber and Shift`
              );
              break;
            case "replaceNumber":
              replaceNumberOut(container, i, writer);
              replaceNumberOut(container, j, writer);

              writeLine(
                writer,
                `Element ${i} and ${j} Are ReplaceNumber and ReplaceNumber`
              );
              break;
            default:
              writeLine(writer, `Element ${i} and ${j} Are Unknown type`);
          }
          break;
      }
    }
  }
};
