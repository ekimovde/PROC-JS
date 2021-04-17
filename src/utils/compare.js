import { funcLengthText } from "../core/funcLengthText";

export const compare = (arr1, arr2) => {
  return funcLengthText(arr1) < funcLengthText(arr2);
};
