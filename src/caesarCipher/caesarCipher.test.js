import caesarCipher from "./caesarCipher.js";

test("shifts letters forward", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("preserves letter case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("preserves punctuation and spaces", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("wraps around the alphabet", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("shifts letters backwards", () => {
  expect(caesarCipher("def", -3)).toBe("abc");
});

test("wraps backward around the alphabet", () => {
  expect(caesarCipher("abc", -1)).toBe("zab");
});

test("handles shifts greater than 26", () => {
  expect(caesarCipher("abc", 29)).toBe("def");
});

test("handles shift equal to 26", () => {
  expect(caesarCipher("abc", 26)).toBe("abc");
});

test("handles shifts greater than 26 in the negative direction", () => {
  expect(caesarCipher("abc", -29)).toBe("xyz");
});
