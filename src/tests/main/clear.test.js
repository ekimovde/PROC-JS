const { containerClear } = require("../../Container");

describe("Clear function", () => {
  let array;

  beforeEach(() => {
    array = ["1", 2, 3, 4, "5"];
  });

  test("Should by defined:", () => {
    expect(containerClear(array)).toBeDefined();
    expect(containerClear(array)).not.toBeUndefined();
  });

  test("Should compare all elements:", () => {
    expect(containerClear(array)).toEqual([]);
  });

  test("Should check for the content:", () => {
    expect(containerClear(array)).not.toContain(false);
    expect(containerClear(array)).not.toContain(true);
    expect(containerClear(array)).not.toContain("");
    expect(containerClear(array)).not.toContain(null);
  });
});
