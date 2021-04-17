import { writeLine } from "../Writer";
import { funcLengthText } from "./funcLengthText";

export const replaceOut = (container, i, writer) => {
  let length = funcLengthText(container[i].text);

  writeLine(
    writer,
    `Text: ${container[i].text}, Length: ${length}, Replacement: ${container[i].replacement}, DecodedText: ${container[i].decodedText}`
  );
};

export const shiftOut = (container, i, writer) => {
  let length = funcLengthText(container[i].text);

  writeLine(
    writer,
    `Text: ${container[i].text}, Length: ${length}, Shift: ${container[i].shift}, DecodedText: ${container[i].decodedText}`
  );
};

export const replaceNumberOut = (container, i, writer) => {
  let length = funcLengthText(container[i].text);

  writeLine(
    writer,
    `Text: ${container[i].text}, Length: ${length}, ReplaceNumber: ${container[i].replaceNumber}, DecodedText: ${container[i].decodedText}`
  );
};
