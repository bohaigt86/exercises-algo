const lengthOfLongestSubstring = string => {
  const len = string.length;

  if (len < 2) return len;

  let temp = '';
  let result = [0, 0]; // [index, length]
  for (let i = 0; i < len; i++) {
    const char = string[i];

    if (temp.indexOf(char) === -1) {
      temp += char;
      console.log(`Round${i}: ${temp}`);
      console.log(result);
    } else {
      const newLen = i - result[0];
      result[0] += temp.indexOf(char) + 1;
      temp = temp.slice(temp.indexOf(char) + 1) + char;
      console.log(`Round${i}: ${temp}`);
      console.log(result);
      if (newLen > result[1]) {
        result[1] = newLen;
      }
    }
  }
  return temp.length > result[1] ? temp.length : result[1];
};

module.exports = lengthOfLongestSubstring;
