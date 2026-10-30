import capitalize from "../capitalize.js";

test("capitalize the first letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("preserves the remaining characters", () => {
  expect(capitalize("jAVAscript")).toBe("JAVAscript");
});

test("handles an empty string", () => {
  expect(capitalize("")).toBe("");
});
