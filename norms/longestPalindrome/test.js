const longestPalindrome = require('./index');

test('function longestPalindrome is defined', () => {
  expect(typeof longestPalindrome).toEqual('function');
});

test('function longestPalindrome returns "abcba" from "aabcbad"', () => {
  const str = 'aabcbad';
  const result = longestPalindrome(str);
  expect(result).toEqual('abcba');
});
