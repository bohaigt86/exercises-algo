// Find a peak in a matrix
// A peak is greater than or equal to the numbers above and below, on its left and right
// [
//    [1,2,3]
//    [2,4,1]
//    [1,2,3]
//  ]
// 4 is a peak, either 3 is a peak too
// Assume the input is at least a 2x2 matrix
function findMatrixPeak(matrix) {
  const row = matrix.length;
  const column = matrix[0].length;

  let max = getMaxValue(matrix, 0);
  if (matrix[max][0] >= matrix[max][1]) {
    return [max, 0];
  }
  max = getMaxValue(matrix, column - 1);
  if (matrix[max][column - 1] >= matrix[max][column - 2]) {
    return [max, column - 1];
  }

  let l = 0,
    r = column - 1;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    max = getMaxValue(matrix, m);

    if (
      matrix[max][m] >= matrix[max][m - 1] &&
      matrix[max][m] >= matrix[max][m + 1]
    ) {
      return [max, m];
    } else if (matrix[max][m] < matrix[max][m - 1]) {
      r = m;
    } else {
      l = m;
    }
  }
}

function getMaxValue(matrix, column) {
  let maxIndex = 0;
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][column] > matrix[maxIndex][column]) {
      maxIndex = i;
    }
  }
  return maxIndex;
}

const matrix = [[1, 3, 6, 1], [2, 4, 8, 2], [3, 5, 7, 3]];
console.log(findMatrixPeak(matrix));

module.exports = findMatrixPeak;
