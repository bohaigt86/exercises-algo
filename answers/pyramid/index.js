// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// Solution #1 - Iteration
function pyramid(n) {
  for (let row = 1; row <= n; row++) {
    let level = '';
    // const build = calcBuild(n, row);
    for (let column = 1; column <= 2 * n - 1; column++) {
      level += calcBuild(n, row, column) ? '#' : ' ';
    }
    console.log(level);
  }
}

function calcBuild(n, row, column) {
  const min = Math.ceil((n * 2 - 1) / 2) - (row - 1);
  const max = Math.ceil((n * 2 - 1) / 2) + (row - 1);
  return column >= min && column <= max ? true : false;
}

module.exports = pyramid;
