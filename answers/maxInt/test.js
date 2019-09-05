const maxInt = require('./index');

test('maxInt function exists', () => {
  expect(maxInt).toBeDefined();
});

test('maxInt returns a largest possible int in string', () => {
  expect(maxInt([10, 2])).toEqual('210');
});

test('maxInt returns a largest possible int in string', () => {
  expect(maxInt([3, 30, 34, 5, 9])).toEqual('9534330');
});
