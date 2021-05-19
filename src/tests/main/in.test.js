const { containerIn } = require("../../Container");
let { Reader, readerConst } = require("../../Reader");

describe("In function:", () => {
  let reader = new Reader("in.txt", "", 0);

  beforeEach(() => {
    readerConst("in.txt", reader);
  });

  test("Should by defined:", () => {
    expect(containerIn(reader)).toBeDefined();
    expect(containerIn(reader)).not.toBeUndefined();
  });

  test("Should check the input function:", () => {
    let result = [
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

    expect(containerIn(reader)).toEqual(result);
  });

  test("Should check for the content:", () => {
    expect(containerIn(reader)).not.toContain();
    expect(containerIn(reader)).not.toContain(null);
    expect(containerIn(reader)).not.toContain(false);
    expect(containerIn(reader)).not.toContain(true);
    expect(containerIn(reader)).not.toContain("");
  });
});
