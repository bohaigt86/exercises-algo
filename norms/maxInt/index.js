function maxInt(array) {
  const result = array
    .map(num => num.toString())
    .sort(compare)
    .reduce((max, char) => char + max);
  return result;
}

function compare(a, b) {
  return parseInt(a + b) - parseInt(b + a);
}

module.exports = maxInt;
