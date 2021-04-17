import { replaceFunc, shiftFunc, replaceNumberFunc } from "../utils/encryption";

export const replacementIn = (tmp, replacement, text, name) => {
  replacement.text = text;
  const { replaceTmp, replaceText } = replaceFunc(tmp);

  replacement.replacement = replaceTmp.join("-");
  replacement.decodedText = replaceText;
  replacement.name = name;
};

export const shiftIn = (tmp, shift, text, name) => {
  shift.text = text;
  const { shiftTmp, strEncoded } = shiftFunc(tmp);

  shift.shift = shiftTmp;
  shift.decodedText = strEncoded;
  shift.name = name;
};

export const replacementIn = (tmp, replacement, text, name) => {
  replacement.text = text;
  const { replaceTmp, replaceText } = replaceFunc(tmp);

  replacement.replacement = replaceTmp.join("-");
  replacement.decodedText = replaceText;
  replacement.name = name;
};
