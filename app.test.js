// findMax.test.js
const findMax = require("./app");

test("finds maximum value in an array of numbers", () => {
  expect(findMax([1, 2, 3])).toBe(3);
  expect(findMax([-1, -2, -3])).toBe(-1);
  expect(findMax([5, 3, 9, 2, 7])).toBe(9);
});

test("returns undefined for an empty array", () => {
  expect(findMax([])).toBe(undefined);
});

test("returns the only value in an array with one element", () => {
  expect(findMax([42])).toBe(42);
});
