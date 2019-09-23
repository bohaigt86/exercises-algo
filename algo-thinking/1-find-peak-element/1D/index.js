// Find the index of a number in an non-empty array who is always greater than or equal to the digits on its left and right
// [1,2,3,5] 5 is a peak
// [1,3,2,5] 3 is a peak
// [1,4,4] either 4 is a peak
function findPeak(array) {
  const len = array.length;
  if (len === 1) return 0;
  if (array[0] >= array[1]) return 0;
  if (array[len - 1] >= array[len - 2]) return len - 1;

  let l = 0,
    r = len - 1,
    m;
  while (l < r) {
    m = Math.floor((l + r) / 2);
    if (array[m - 1] >= array[m]) {
      r = m;
    } else if (array[m] <= array[m + 1]) {
      l = m;
    } else {
      return m;
    }
  }
}

module.exports = findPeak;
