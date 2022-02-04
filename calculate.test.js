import { expect } from "@jest/globals";
import { calculateByContext } from "./calculate";

describe("calculateByContext", () => {
  it("returns summed values for 'sum' context", () => {
    const expectedValue = 6;
    const result = calculateByContext("sum", [1, 2, 3]);

    expect(result).toBe(expectedValue);
  });

  it("returns subtracted values for 'subtract' context", () => {
    const expectedValue = 2;
    const result = calculateByContext("subtract", [5, 2, 1]);

    expect(result).toBe(expectedValue);
  });

  it("returns multiplyed values for 'multiply' context", () => {
    const expectedValue = 125;
    const result = calculateByContext("multiply", [5, 5, 5]);

    expect(result).toBe(expectedValue);
  });
});
