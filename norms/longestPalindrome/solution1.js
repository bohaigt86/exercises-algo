// Brute force - O(n*n*n)
var longestPalindrome = function(s) {
  const len = s.length;
  if (len === 0 || len === 1 || isPalindrome(s)) {
    return s;
  }
  // const matrix = [...Array(len)].map(el => Array(len));
  let maxLen = 0;
  let result = '';
  for (let i = 0; i < len; i++) {
    if (len - i < maxLen) {
      return result;
    }
    for (let j = len; j > 0; j--) {
      const str = s.slice(i, j);
      if (isPalindrome(str)) {
        if (j - i > maxLen) {
          maxLen = j - i;
          result = str;
        }
      }
    }
  }

  return result;
};

var isPalindrome = function(s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    if (s.charAt(i) !== s.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};
