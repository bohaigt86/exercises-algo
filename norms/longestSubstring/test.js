const lengthOfLongestSubstring = require('./index');

test('function lengthOfLongestSubstring is defined', () => {
  expect(typeof lengthOfLongestSubstring).toEqual('function');
});

test('function lengthOfLongestSubstring returns 7 for string ""fbojelwjgercer""', () => {
  const str = 'fbojelwjgercer';
  const result = lengthOfLongestSubstring(str);
  expect(result).toEqual(7);
});
