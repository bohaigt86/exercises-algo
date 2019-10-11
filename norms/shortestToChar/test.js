const shortestToChar = require('./v2');

test('function shortestToChar is defined', () => {
  expect(typeof shortestToChar).toEqual('function');
});

test('function shortestToChar returns [3,2,1,0,1,0,0,1,2,2,1,0,1], given string = "loveleetcode" and char="e"', () => {
  const string = 'loveleetcode';
  const char = 'e';
  const results = shortestToChar(string, char);
  expect(results).toEqual([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]);
});
