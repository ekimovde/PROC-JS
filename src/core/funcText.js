import Replacement from "./Replacement";
import Shift from "./Shift";
import ReplaceNumber from "./ReplaceNumber";

import { replacementIn, shiftIn, replaceNumberIn } from "./inFunc";
import { replaceOut, shiftOut, replaceNumberOut } from "./outFunc";

export const inText = (tmp, container) => {
  switch (tmp[0]) {
    case "1":
      let replacement = new Replacement();

      replacementIn(
        tmp.toString().split(" "),
        replacement,
        tmp.split(" ")[1].replace(/\r/g, ""),
        tmp.split(" ")[3].replace(/\r/g, "")
      );

      container.push(replacement);

      break;
    case "2":
      let shift = new Shift();

      shiftIn(
        tmp.toString().split(" "),
        shift,
        tmp.split(" ")[1],
        tmp.split(" ")[3].replace(/\r/g, "")
      );
      container.push(shift);

      break;
    case "3":
      let replaceNumber = new ReplaceNumber();

      replaceNumberIn(
        tmp.toString().split(" "),
        replaceNumber,
        tmp.split(" ")[1].replace(/\r/g, ""),
        tmp.split(" ")[3].replace(/\r/g, "")
      );

      container.push(replaceNumber);

      break;
    default:
      return 0;
  }
};

export const outText = (container, i, writer) => {
  let objectKeys = Object.keys(container[i]);

  switch (objectKeys[1]) {
    case "replacement":
      replaceOut(container, i, writer);

      break;
    case "shift":
      shiftOut(container, i, writer);

      break;
    case "replaceNumber":
      replaceNumberOut(container, i, writer);

      break;
    default:
      break;
  }
};
