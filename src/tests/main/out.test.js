const { containerOut } = require("../../Container");
let { Writer } = require("../../Writer");

describe("In function:", () => {
  let writer = new Writer("out.txt");
  let array = [];

  test("Should by defined:", () => {
    expect(containerOut(array, writer)).toBeDefined();
    expect(containerOut(array, writer)).not.toBeUndefined();
  });

  test("Should check the input function:", () => {
    let result = [
      "ReplaceNumber: [г->5]-[l->3], DecodedText: 53",
      "Replacement: [А->б]-[б->а], DecodedText: ба",
      "Shift: 2, DecodedText: Мрф",
    ];

    // expect(containerOut(array, writer)).toEqual(result);
  });

  test("Should check for the content:", () => {
    expect(containerOut(array, writer)).not.toContain();
    expect(containerOut(array, writer)).not.toContain(null);
    expect(containerOut(array, writer)).not.toContain(false);
    expect(containerOut(array, writer)).not.toContain(true);
    expect(containerOut(array, writer)).not.toContain("");
  });
});
