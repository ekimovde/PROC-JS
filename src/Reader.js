import fs from "fs";

export function Reader(path, data, index) {
  this.path = path;
  this.data = data;
  this.index = index;
}

export const readerConst = (path, reader) => {
  reader.path = path;
  reader.data = fs.readFileSync(path, "utf-8").toString().split("\n");
  reader.index = 0;
};

export const readLine = (reader) => {
  let tmp = reader.data[reader.index];
  reader.index++;

  return tmp;
};

export const fileEmpty = (reader) => {
  return reader.index > reader.data.length - 1 ? true : false;
  s;
};
