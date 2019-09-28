const lengthOfLongestSubstring = string => {
  const len = string.length;

  if (len < 2) return len;
  let i = 0,
    flag = 0,
    length = 0,
    result = 0;

  while (i < len) {
    const char = string.charAt(i);
    const rest = string.slice(flag);
    const pos = rest.indexOf(char) + flag; // 在flag为起点的String里寻找当先char的index，但是index是相对原始输入的整个string而言的
    // console.log(`Round${i} - Rest: ${rest} - Position: ${pos}`);
    if (pos < i) {
      flag = pos + 1;

      if (length > result) {
        result = length;
      }
      if (result >= len - flag) {
        return result;
      }
      length = i - flag;
    }
    length++;
    i++;
  }
  return length;
};

module.exports = lengthOfLongestSubstring;
