import analyzeArray from "./analyzeArray.js";

test("analyzes an array of numbers", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("analyzes an array with negative numbers", () => {
  expect(analyzeArray([-5, -2, -10, -1])).toEqual({
    average: -4.5,
    min: -10,
    max: -1,
    length: 4,
  });
});

test("analyzes an array with decimal numbers", () => {
  expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
    average: 2.5,
    min: 1.5,
    max: 3.5,
    length: 3,
  });
});

test("analyzes an array with one number", () => {
  expect(analyzeArray([7])).toEqual({
    average: 7,
    min: 7,
    max: 7,
    length: 1,
  });
});

test("throws an error for an empty array", () => {
  expect(() => analyzeArray([])).toThrow("Array cannot be empty");
});
