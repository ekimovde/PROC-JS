import Replacement from "./Replacement";
import Shift from "./Shift";

import { replacementIn, shiftIn } from "./inFunc";
import { replaceOut, shiftOut } from "./outFunc";

export const inText = (tmp, container) => {
  switch (tmp[0]) {
    case "1":
      let replacement = new Replacement();

      replacementIn(
        tmp.toString().split(" "),
        replacement,
        tmp.split(" ")[1].replace(/\r/g, "")
      );

      container.push(replacement);

      break;
    case "2":
      let shift = new Shift();

      shiftIn(tmp.toString().split(" "), shift, tmp.split(" ")[1]);
      container.push(shift);

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
    default:
      break;
  }
};
