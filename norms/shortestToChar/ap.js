function ap(len, start = 0, a = 1) {
  return [...Array(len)].map((e, i) => start + i * a);
}

console.log(ap(5, 10, -1));

module.exports = ap;
