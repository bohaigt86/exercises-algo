// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Use memoization, a concept frequently discussed in dynamic programming

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function fib(n) {
  // T(n) = O(2^n) not good!
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

// after using memoization, fib(15) will be as fast as fib(1), which only takes 1 ms
fib = memoize(fib);

module.exports = fib;
