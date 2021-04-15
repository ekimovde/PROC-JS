import fs from "fs";

export function Writer(path, string) {
  this.path = path;
  this.string = string;
}

export const writerConst = (path, writer) => {
  writer.path = path;
};

export const writeLine = (writer, str) => {
  writer.string += str + "\n";
};

export const write = (str, writer) => {
  writer.string += str;
};

export const save = (writer) => {
  fs.writeFile(writer.path, writer.string, (err) => {
    if (err) throw err;
  });
};
