const { funcLengthText } = require("../../core/funcLengthText");

describe("LengthText function:", () => {
  let str;

  beforeEach(() => {
    str = "Hello world!";
  });

  test("Should by defined:", () => {
    expect(funcLengthText(str)).toBeDefined();
    expect(funcLengthText(str)).not.toBeUndefined();
  });

  test("Should compare one elements:", () => {
    expect(funcLengthText(str)).toEqual(12);
    expect(funcLengthText(str)).toBeGreaterThan(6);
    expect(funcLengthText(str)).toBeGreaterThanOrEqual(12);
    expect(funcLengthText(str)).toBeLessThan(20);
    expect(funcLengthText(str)).toBeLessThanOrEqual(12);
  });

  test("Should check for the content:", () => {
    expect(funcLengthText(str)).not.toContain(false);
    expect(funcLengthText(str)).not.toContain(true);
    expect(funcLengthText(str)).not.toContain(null);
    expect(funcLengthText(str)).not.toContain("");
  });
});
