function maxChar(str) {
  const chars = mapChar(str);
  let max = 0;
  let maxChar = '';

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  console.log(maxChar);
  return maxChar;
}

function mapChar(str) {
  let chars = {};
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }
  return chars;
}

module.exports = maxChar;
