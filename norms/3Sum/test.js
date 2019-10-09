const threeSum = require('./index');

test('function threeSum is defined', () => {
  expect(typeof threeSum).toEqual('function');
});

test('function threeSum returns [[-1,0,1],[-1,-1,2]], given [-1, 0, 1, 2, -1, -4]', () => {
  const input = [-1, 0, 1, 2, -1, -4];
  const result = [[-1, -1, 2], [-1, 0, 1]];
  expect(threeSum(input)).toEqual(result);
});

test('function threeSum returns [[0,0,0]], given [0, 0, 0]', () => {
  const input = [0, 0, 0];
  const result = [[0, 0, 0]];
  expect(threeSum(input)).toEqual(result);
});

test('function threeSum returns [[0, 0, 0]], given [0, 0, 0, 0]', () => {
  const input = [0, 0, 0, 0];
  const result = [[0, 0, 0]];
  expect(threeSum(input)).toEqual(result);
});

test('function threeSum returns [[-1, 0, 1]], given [-1, 0, 1, 0]', () => {
  const input = [-1, 0, 1, 0];
  const result = [[-1, 0, 1]];
  expect(threeSum(input)).toEqual(result);
});
