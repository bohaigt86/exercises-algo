function threeSum(arr) {
  let results = [];
  if (arr.length > 2) {
    arr.sort((a, b) => a - b);
    const len = arr.length;

    if (arr[0] <= 0 && arr[len - 1] >= 0) {
      for (let i = 0; i < len - 1; i++) {
        if (arr[i] > 0) break;
        if (arr[i] === arr[i - 1]) continue;

        let result,
          first = i + 1,
          last = len - 1;

        while (first < last) {
          if (arr[first] === arr[first - 1] && first > i + 1) {
            first++;
          } else if (arr[last] === arr[last + 1] && last < len - 1) {
            last--;
          } else {
            result = arr[i] + arr[first] + arr[last];
            if (result === 0) {
              results.push([arr[i], arr[first], arr[last]]);
              first++;
              last--;
            } else if (result > 0) {
              last--;
            } else {
              first++;
            }
          }
        }
      }
    }
  }
  return results;
}

module.exports = threeSum;
