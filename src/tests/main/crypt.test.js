const {
  replaceFunc,
  shiftFunc,
  replaceNumberFunc,
} = require("../../utils/encryption");

describe("Encryption replaceFunc:", () => {
  let array;

  beforeEach(() => {
    array = ["1", "аб", "ба", "denis"];
  });

  test("Should by defined:", () => {
    expect(replaceFunc(array)).toBeDefined();
    expect(replaceFunc(array)).not.toBeUndefined();
  });

  test("Should encode the message:", () => {
    const result = {
      replaceTmp: ["[а->б]", "[б->а]"],
      replaceText: "ба",
    };

    expect(replaceFunc(array)).toEqual(result);
  });

  test("Should check for the content:", () => {
    expect(replaceFunc(array)).toHaveProperty("replaceTmp");
    expect(replaceFunc(array)).toHaveProperty("replaceText");
  });
});

describe("Encryption shiftFunc:", () => {
  let array;

  beforeEach(() => {
    array = ["2", "Кот", "2", "Denis"];
  });

  test("Should by defined:", () => {
    expect(shiftFunc(array)).toBeDefined();
    expect(shiftFunc(array)).not.toBeUndefined();
  });

  test("Should encode the message:", () => {
    const result = {
      shiftTmp: 2,
      strEncoded: "Мрф",
    };

    expect(shiftFunc(array)).toEqual(result);
  });

  test("Should check for the content:", () => {
    expect(shiftFunc(array)).toHaveProperty("shiftTmp");
    expect(shiftFunc(array)).toHaveProperty("strEncoded");
  });
});

describe("Encryption replaceNumberFunc:", () => {
  let array;

  beforeEach(() => {
    array = ["3", "rl", "53", "Denis"];
  });

  test("Should by defined:", () => {
    expect(replaceNumberFunc(array)).toBeDefined();
    expect(replaceNumberFunc(array)).not.toBeUndefined();
  });

  test("Should encode the message:", () => {
    const result = {
      replaceTmp: ["[r->5]", "[l->3]"],
      replaceText: "53",
    };

    expect(replaceNumberFunc(array)).toEqual(result);
  });

  test("Should check for the content:", () => {
    expect(replaceNumberFunc(array)).toHaveProperty("replaceTmp");
    expect(replaceNumberFunc(array)).toHaveProperty("replaceText");
  });
});
