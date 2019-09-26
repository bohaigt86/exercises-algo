/**
 * @param {string[]} strArr
 * @return {string[][]}
 */
var groupAnagrams = function(strArr) {
  const obj = {};
  const results = [];
  strArr.forEach(str => {
    const sortS = sortedStr(str);
    if (!obj[sortS]) {
      obj[sortS] = [str];
    } else {
      obj[sortS].push(str);
    }
  });
  for (let key in obj) {
    results.push(obj[key]);
  }

  return results;
};

var areAnagrams = function(str1, str2) {
  const arr1 = sortedStr(str1);
  const arr2 = sortedStr(str2);

  return arr1 === arr2;
};

var sortedStr = function(str) {
  return str
    .split('')
    .sort()
    .join('');
};

module.exports = groupAnagrams;
