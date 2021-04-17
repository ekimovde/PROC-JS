import { writeLine } from "../Writer";

export const replaceOut = (container, i, writer) => {
  writeLine(
    writer,
    `Text: ${container[i].text}, Replacement: ${container[i].replacement}, DecodedText: ${container[i].decodedText}`
  );
};

export const shiftOut = (container, i, writer) => {
  writeLine(
    writer,
    `Text: ${container[i].text}, Shift: ${container[i].shift}, DecodedText: ${container[i].decodedText}`
  );
};

export const replaceNumberOut = (container, i, writer) => {
  writeLine(
    writer,
    `Text: ${container[i].text}, ReplaceNumber: ${container[i].replaceNumber}, DecodedText: ${container[i].decodedText}`
  );
};
