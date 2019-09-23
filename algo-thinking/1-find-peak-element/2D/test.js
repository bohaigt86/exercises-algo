const findMatrixPeak = require('./index.js');

test('function findMatrixPeak is defined', () => {
  expect(typeof findMatrixPeak).toEqual('function');
});

test('function findMatrixPeak finds peak in the first column of a matrix', () => {
  const matrix = [[1, 3], [2, 2], [3, 1]];
  const result = findMatrixPeak(matrix);
  expect(result).toEqual([2, 0]);
});

test('function findMatrixPeak finds peak in the last column of a matrix', () => {
  const matrix = [[1, 4], [2, 5], [3, 6]];
  const result = findMatrixPeak(matrix);
  expect(result).toEqual([2, 1]);
});

test('function findMatrixPeak finds peak in the middle area of a matrix', () => {
  const matrix = [[1, 3, 6, 1], [2, 4, 8, 2], [3, 5, 7, 3]];
  const result = findMatrixPeak(matrix);
  expect(result).toEqual([1, 2]);
});
