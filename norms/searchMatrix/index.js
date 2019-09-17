/**
 * Write an efficient algorithm that searches for a value in an m x n matrix. This * matrix has the following properties:
 * - Integers in each row are sorted in ascending from left to right.
 * - Integers in each column are sorted in ascending from top to bottom.
 */

const searchMatrix = function(matrix, target) {
  if (matrix.length === 0) return false;
  const maxNums = matrix.map(array => array[array.length - 1]);
  const minNums = matrix.map(array => array[0]);

  if (maxNums.indexOf(target) > -1 || minNums.indexOf(target) > -1) {
    return true;
  } else if (maxNums[maxNums.length - 1] < target || minNums[0] > target) {
    return false;
  } else {
    // include
    const startRow = maxNums.indexOf(maxNums.find(maxNum => maxNum > target));
    console.log(startRow);
    // exclude
    const endRow =
      minNums.indexOf(minNums.find(minNum => minNum > target)) !== -1
        ? minNums.indexOf(minNums.find(minNum => minNum > target))
        : minNums.length;
    console.log(endRow);

    for (var i = startRow; i < endRow; i++) {
      for (var j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === target) {
          return true;
        }
      }
    }
    return false;
  }
};

module.exports = searchMatrix;
