import { expect, it, describe } from "vitest";
import { add } from "./math";

describe("math.js", () => {
  it("should summarize all number values in an array", () => {
    // arrange
    const numbers = [1, 2, 3];

    //act
    const result = add(numbers);

    //assert
    const expectedResult = numbers.reduce(
      (prevValue, currentValue) => prevValue + currentValue,
      0
    );
    expect(result).toBe(expectedResult);
  });

  it("should yield NAN if a least one invalid number is provided", () => {
    const numbers = ["invalid", 2, 3];

    //act
    const result = add(numbers);

    //assert
    expect(result).toBeNaN();
  });

  it("should yield a correct sum if an array of numeric string values is provided", () => {
    const numbers = ["1", "2", "3"];

    //act
    const result = add(numbers);

    //assert
    const expectedResult = numbers.reduce(
      (prevValue, currentValue) => +prevValue + +currentValue,
      0
    );
    expect(result).toBe(expectedResult);
  });

  it("should yield 0 if an empty array is provided", () => {
    const numbers = [];

    const result = add(numbers);
    expect(result).toBe(0);
  });

  it("should throw an error if no value is passed into the function", () => {
    const resultFn = () => {
      add();
    };
    expect(resultFn).toThrow();
  });

  it("should throw an error if provided with multiple arguments instead of an array", () => {
    const num1 = 1;
    const num2 = 2;

    const resultFn = () => {
      add(num1, num2);
    };
    expect(resultFn).toThrow(/is not iterable/);
  });
});
