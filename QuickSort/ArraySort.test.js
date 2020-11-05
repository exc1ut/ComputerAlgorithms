const sortArray = require("./ArraySort");

test("Check an array for sort", () => {
  const testArray = [5, 2, 3, 1];
  const outputArray = [1, 2, 3, 5];
  expect(sortArray(testArray)).toStrictEqual(outputArray);
});
