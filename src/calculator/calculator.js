export default calculator = {
  add(a, b) {
    validateInput(a, b);
    return a + b;
  },
  subtract(a, b) {
    validateInput(a, b);
    return a - b;
  },
  multiply(a, b) {
    validateInput(a, b);
    return a * b;
  },
  divide(a, b) {
    validateInput(a, b);
    return a / b;
  },
};

function validateInput(a, b) {
  if (typeof a === "string" || typeof b === "string") throw new Error("Values cannot be strings");

  if (b === 0) throw new Error("Cannot divide by zero");
}
