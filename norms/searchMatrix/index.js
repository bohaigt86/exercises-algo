/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This * matrix has the following properties:
 * - Integers in each row are sorted in ascending from left to right.
 * - Integers in each column are sorted in ascending from top to bottom.
 */

var searchMatrix = function(matrix, target) {
  if (matrix.length < 1 || matrix[0].length < 1) {
    return false;
  }

  let row = matrix.length - 1;
  let col = 0;

  while (row >= 0 && col < matrix[0].length) {
    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] > target) {
      row--;
    } else {
      col++;
    }
  }
  return false;
};

module.exports = searchMatrix;
