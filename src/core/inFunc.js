import { replaceFunc, shiftFunc, replaceNumberFunc } from "../utils/encryption";

export const replacementIn = (tmp, replacement, text) => {
  replacement.text = text;
  const { replaceTmp, replaceText } = replaceFunc(tmp);

  replacement.replacement = replaceTmp.join("-");
  replacement.decodedText = replaceText;
};

export const shiftIn = (tmp, shift, text) => {
  shift.text = text;
  const { shiftTmp, strEncoded } = shiftFunc(tmp);

  shift.shift = shiftTmp;
  shift.decodedText = strEncoded;
};

export const replaceNumberIn = (tmp, replaceNumber, text) => {
  replaceNumber.text = text;
  const { replaceTmp, replaceText } = replaceNumberFunc(tmp);

  replaceNumber.replaceNumber = replaceTmp.join("-");
  replaceNumber.decodedText = replaceText;
};
