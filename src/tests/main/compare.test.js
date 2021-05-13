const { compare } = require("../../utils/compare");

describe("Compare function:", () => {
  let str1, str2;

  beforeEach(() => {
    str1 = "Кот";
    str2 = "Собака";
  });

  test("Should by defined:", () => {
    expect(compare(str1, str2)).toBeDefined();
    expect(compare(str1, str2)).not.toBeUndefined();
  });

  test("Should compare two elements:", () => {
    const result = true;

    expect(compare(str1, str2)).toEqual(result);
  });

  test("Should check for the content:", () => {
    expect(compare(str1, str2)).toBeTruthy();
    expect(compare(str1, str2)).not.toContain(0);
    expect(compare(str1, str2)).not.toContain(false);
    expect(compare(str1, str2)).not.toContain(null);
    expect(compare(str1, str2)).not.toContain("");
  });
});
