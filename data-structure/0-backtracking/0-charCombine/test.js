const charCombine = require('./index.js');

test('function charCombine is defined', () => {
  expect(typeof charCombine).toEqual('function');
});

test('none of resulting strings has letter c in the middle', () => {
  const str = 'bca';
  const result = charCombine(str);
  expect(result).toEqual(['bac', 'cba', 'cab', 'abc']);
});
