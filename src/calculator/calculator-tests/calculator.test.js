import calculator from "../calculator.js";

test("adds two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtracts two numbers", () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});

test("subtract returns negative numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("multiply two numbers", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("multiply negatives returns positive", () => {
  expect(calculator.multiply(-2, -2)).toBe(4);
});

test("multiply negative/positive returns negative", () => {
  expect(calculator.multiply(-3, 2)).toBe(-6);
});

test("divide two numbers", () => {
  expect(calculator.divide(3, 1)).toBe(3);
});

test("divsion of negatives returns positive", () => {
  expect(calculator.divide(-4, -2)).toBe(2);
});

test("division negative/positive returns negative", () => {
  expect(calculator.divide(-4, 2)).toBe(-2);
});

test("throw error for division by zero", () => {
  expect(() => calculator.divide(4, 0)).toThrow();
});

test("devides zero by a number", () => {
  expect(calculator.divide(0, 3)).toBe(0);
});

test("throw error when string is passed", () => {
  expect(() => calculator.add("2", 3)).toThrow();
  expect(() => calculator.subtract(2, "3")).toThrow();
  expect(() => calculator.multiply("2", 3)).toThrow();
  expect(() => calculator.divide(2, "3")).toThrow();
});
