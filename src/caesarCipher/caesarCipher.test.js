import caesarChipher from "./caesarCipher.js";

test("shifts letters forward", () => {
  expect(caesarChipher("abc", 3)).toBe("def");
});

test("preserves letter case", () => {
  expect(caesarChipher("HeLLo", 3)).toBe("KhOOr");
});

test("preserves punctuation and spaces", () => {
  expect(caesarChipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("wraps around the alphabet", () => {
  expect(caesarChipher("xyz", 3)).toBe("abc");
});

test("shifts letters backwards", () => {
  expect(caesarChipher("def", -3)).toBe("abc");
});

test("wraps backward around the alphabet", () => {
  expect(caesarChipher("abc", -1)).toBe("zab");
});

test("handles shifts greater than 26", () => {
  expect(caesarChipher("abc", 29)).toBe("def");
});
