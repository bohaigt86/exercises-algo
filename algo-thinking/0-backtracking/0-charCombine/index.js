// list all possible combinations of a, b, c, but c cannot be in the middle;
// 'abc' is fine, 'bca' is not okay
function charCombine(str) {
  const resultsArr = [];
  recur(str.split(''));
  return resultsArr;

  function recur(array, result = '') {
    array.forEach(char => {
      if (char === 'c' && result.length === 1) return;
      const nResult = result + char;
      const nArray = array.filter(item => item !== char);

      if (nArray.length === 0) {
        resultsArr.push(nResult);
      }
      recur(nArray, nResult);
    });
  }
}

console.log(charCombine('bca'));

module.exports = charCombine;
