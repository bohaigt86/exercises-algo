const LCS = require('./index');

test('LCS function is defined', () => {
  expect(typeof LCS).toEqual('function');
});

test('LCS function returns "", given "ABD" and ""', () => {
  const str1 = 'ABD';
  const str2 = '';
  const lcs = LCS(str1, str2);
  expect(lcs).toEqual('');
});

test('LCS function returns "AD", given "ABD" and "ACD"', () => {
  const str1 = 'ABD';
  const str2 = 'ACD';
  const lcs = LCS(str1, str2);
  expect(lcs).toEqual('AD');
});

test('LCS function returns "Its awesome.", given "Its aweesome." and "It is awesome."', () => {
  const str1 = 'Its aweesome.';
  const str2 = 'It is awesome.';
  const lcs = LCS(str1, str2);
  expect(lcs).toEqual('Its awesome.');
});
