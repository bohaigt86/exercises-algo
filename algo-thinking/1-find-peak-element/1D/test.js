const findPeak = require('./index.js');

test('function findPeak works in array with single element', () => {
  const array = [1];
  const result = findPeak(array);
  expect(result).toEqual(0);
});

test('function findPeak finds a peak at either end of array', () => {
  const array = [3, 1, 2, 1];
  const result = findPeak(array);
  expect(result).toEqual(0);
});

test('function findPeak finds a peak in the middle of array', () => {
  const array = [1, 2, 3, 1, 2, 1];
  const result = findPeak(array);
  expect(result).toEqual(2);
});
