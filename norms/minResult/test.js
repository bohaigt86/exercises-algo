const getMin = require('./index');

test('function getMin is define', () => {
  expect(typeof getMin).toEqual('function');
});

test('function getMin returns 50 when input is "50-40+60"', () => {
  const str = '50-40+60';
  const result = getMin(str);
  expect(result).toEqual(-50);
});

test('function getMin returns 50 when input is "50"', () => {
  const str = '50';
  const result = getMin(str);
  expect(result).toEqual(50);
});
