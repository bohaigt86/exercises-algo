// Solution #2 Brute force Ver.Ka
// Time: O(n*n) Memory: O(n)
const longestPalindrome = s => {
  const len = s.length;
  let result = '';
  const array = new Array(len);

  for (let i = len - 1; i >= 0; i--) {
    for (let j = len - 1; j >= i; j--) {
      array[j] = s.charAt(i) === s.charAt(j) && (j - i < 3 || array[j - 1]);
      if (array[j] && j - i + 1 > result.length) {
        console.log(`start: ${i} - end: ${j}`);
        result = s.slice(i, j + 1);
      }
    }
    console.log(result);
  }
  return result;
};

module.exports = longestPalindrome;
