const groupAnagrams = require('./index');

test('groupAnagrams function is defined', () => {
  expect(typeof groupAnagrams).toEqual('function');
});

test('groupAnagrams works as expected', () => {
  const strArr = ['eat', 'tod', 'eta', 'dot', 'nat', 'tan', 'tea'];
  const result = groupAnagrams(strArr);
  expect(result).toEqual([
    ['eat', 'eta', 'tea'],
    ['tod', 'dot'],
    ['nat', 'tan']
  ]);
});
