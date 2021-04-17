import { writeLine } from "../Writer";

export const replaceOut = (container, i, writer) => {
  writeLine(
    writer,
    `Text: ${container[i].text}, Replacement: ${container[i].replacement}, DecodedText: ${container[i].decodedText}, Name: ${container[i].name}`
  );
};

export const shiftOut = (container, i, writer) => {
  writeLine(
    writer,
    `Text: ${container[i].text}, Shift: ${container[i].shift}, DecodedText: ${container[i].decodedText}, Name: ${container[i].name}`
  );
};
