const ap = require('./ap');
function shortestToChar(str, char) {
  const len = str.length;
  const results = [];

  const charIndex = [];
  [...str].forEach((el, i) => {
    if (el === char) charIndex.push(i);
  });
  // deal with 1st index of c
  let arr = charIndex[0] > 0 ? ap(charIndex[0], charIndex[0], -1) : [];
  results.push(...arr);
  // deal with index in the middle
  for (let i = 1; i < charIndex.length; i++) {
    let mid = Math.ceil((charIndex[i] + charIndex[i - 1]) / 2),
      dl = mid - charIndex[i - 1],
      dr = charIndex[i] - mid,
      tempL = dl <= 1 ? [0] : ap(dl),
      tempR = dr > 0 ? ap(dr, dr, -1) : [];
    arr = [...tempL, ...tempR];
    results.push(...arr);
  }
  // deal with last index of c
  arr =
    charIndex[charIndex.length - 1] < len - 1
      ? ap(len - 1 - charIndex[charIndex.length - 1] + 1)
      : [0];
  results.push(...arr);

  return results;
}

const str = 'loveleetcode!';
const char = 'e';

console.log(shortestToChar(str, char));

module.exports = shortestToChar;
