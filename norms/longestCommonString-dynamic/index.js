function memoizeLCS(str1, str2) {
  let cache = [...Array(str1.length)].map(e => Array(str2.length));

  return LCS(str1, str2, 0, 0, cache);
}

function LCS(str1, str2, i = 0, j = 0, cache) {
  if (i === str1.length || j === str2.length) return '';

  if (cache[i][j] !== undefined) {
    return cache[i][j];
  }

  if (str1[i] === str2[j]) {
    cache[i][j] = str1[i] + LCS(str1, str2, i + 1, j + 1, cache);
    return cache[i][j];
  }

  let result1 = LCS(str1, str2, i + 1, j, cache);
  let result2 = LCS(str1, str2, i, j + 1, cache);
  let result;
  if (result1.length > result2.length) {
    result = result1;
  } else {
    result = result2;
  }
  cache[i][j] = result;
  return cache[i][j];
}

module.exports = memoizeLCS;
