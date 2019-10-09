const threeSum = require('./index');

test('function threeSum is defined', () => {
  expect(typeof threeSum).toEqual('function');
});

test('function threeSum returns [[-1,0,1],[-1,-1,2]], given [-1, 0, 1, 2, -1, -4]', () => {
  const input = [-1, 0, 1, 2, -1, -4];
  const result = [[-1, 0, 1], [-1, -1, 2]];
  expect(threeSum(input)).toEqual(result);
});
