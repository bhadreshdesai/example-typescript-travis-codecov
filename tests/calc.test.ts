import { Calculator } from "../src/calc";

describe("Calculator Test Suite", () => {
  test("Test add", () => {
    const calc = new Calculator();
    expect(calc.add(2, 3)).toBe(5);
  });
});
