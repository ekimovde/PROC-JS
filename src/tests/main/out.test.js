const { containerOut } = require("../../Container");
let { Writer, writerConst, save } = require("../../Writer");
import { Reader, readerConst, readLine } from "../../Reader";

describe("In function:", () => {
  let writer;
  let reader;
  let dataOut = [
    {
      text: "гl",
      replaceNumber: "[г->5]-[l->3]",
      decodedText: "53",
      name: "Denis",
    },
    {
      text: "Аб",
      replacement: "[А->б]-[б->а]",
      decodedText: "ба",
      name: "Vlad",
    },
    { text: "Кот", shift: 2, decodedText: "Мрф", name: "Vadim" },
  ];

  beforeEach(() => {
    writer = new Writer("out.txt", "");
    writerConst("out.txt", writer);
    reader = new Reader("out.txt", "", 0);
    readerConst("out.txt", reader);
  });

  test("Should check the input function:", () => {
    let result =
      "Text: гl, Name: Denis, Length: 2, ReplaceNumber: [г->5]-[l->3], DecodedText: 53";
    containerOut(dataOut, writer);
    save(writer);
    expect(readLine(reader)).toEqual(result);
  });
});
