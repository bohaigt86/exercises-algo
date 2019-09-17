const searchMatrix = require('./index.js');

test('searchMatrix function exists', () => {
  expect(typeof searchMatrix).toEqual('function');
});

// test('maxInt returns a largest possible int in string', () => {
//   expect(maxInt([10, 2])).toEqual('210');
// });

test('searchMatrix called with target smaller than all numbers in matrix', () => {
  const matrix = [[3, 4]];
  const result = searchMatrix(matrix, 2);
  expect(result).toEqual(false);
});

test('searchMatrix called with target greater than all numbers in matrix', () => {
  const matrix = [[3, 4]];
  const result = searchMatrix(matrix, 5);
  expect(result).toEqual(false);
});

test('searchMatrix called with one element in matrix', () => {
  const matrix = [[1, 3, 5]];
  const result = searchMatrix(matrix, 3);
  expect(result).toEqual(true);
});

test('searchMatrix called with multiple elements in matrix', () => {
  const matrix = [[1, 3, 5], [3, 4, 7], [4, 5, 10]];
  const result = searchMatrix(matrix, 5);
  expect(result).toEqual(true);
});

test('searchMatrix called with multiple elements in matrix', () => {
  const matrix = [
    [1, 3, 5, 12, 18],
    [3, 4, 7, 18, 19],
    [4, 5, 10, 19, 22],
    [7, 10, 15, 20, 26],
    [10, 14, 23, 80, 100]
  ];
  const result = searchMatrix(matrix, 8);
  expect(result).toEqual(false);
});
