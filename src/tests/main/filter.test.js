const { containerFilter } = require("../../Container");

describe("Filter function", () => {
  let array;

  beforeEach(() => {
    array = [
      {
        text: "Аб",
        replacement: "[А->б]-[б->а]",
        decodedText: "ба",
        name: "Vlad",
      },
      {
        text: "гl",
        replaceNumber: "[г->5]-[l->3]",
        decodedText: "53",
        name: "Denis",
      },
      { text: "Кот", shift: 2, decodedText: "Мрф", name: "Vadim" },
    ];
  });

  test("Should by defined:", () => {
    expect(containerFilter(array, 0)).toBeDefined();
    expect(containerFilter(array, 0)).not.toBeUndefined();
  });

  test("Should compare all elements:", () => {
    expect(containerFilter(array, 0)).toEqual(true);
    expect(containerFilter(array, 1)).toEqual(false);
    expect(containerFilter(array, 2)).toEqual(false);
  });

  test("Should check for the content:", () => {
    expect(containerFilter(array, 0)).not.toContain(false);
    expect(containerFilter(array, 1)).not.toContain(true);
    expect(containerFilter(array, 2)).not.toContain(true);
  });
});
