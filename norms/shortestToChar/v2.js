// execution time: 75ms

function shortestToChar(str, char) {
  let arr = str.split('');
  let reversedArr = str.split('').reverse();
  const len = arr.length;
  let results = [];
  for (let i = 0; i < len; i++) {
    let d = arr.indexOf(char, i) - i;
    let reD = reversedArr.indexOf(char, len - 1 - i) - (len - 1 - i);
    if (d < 0 || (d > reD && reD > 0)) {
      results.push(reD);
    } else {
      results.push(d);
    }
  }

  return results;
}

module.exports = shortestToChar;
