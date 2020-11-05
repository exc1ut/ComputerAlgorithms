const setColors = require("./QuickSort");

test("Check an array to be sorted", () => {
  let rgbArray = [2, 0, 2, 1, 1, 0];
  let expectedArray = [0, 0, 1, 1, 2, 2];
  expect(setColors(rgbArray)).toStrictEqual(expectedArray);
});
