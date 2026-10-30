import reverseString from "../reversed.js";

test("reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("preserves character case", () => {
  expect(reverseString("Odin")).toBe("nidO");
});

test("handled an empty string", () => {
  expect(reverseString("")).toBe("");
});
