function lastSixDigits(n) {
  if (n < 2) return n;

  let n1 = [0, 0, 0, 0, 0, 0],
    n2 = [1, 0, 0, 0, 0, 0],
    result = Array(6).fill(0);
  for (let i = 1; i < n; i++) {
    let carry = 0;

    n1.forEach((int, i) => {
      // max:
      // sum = 18, carry = 1
      const sum = int + n2[i] + carry; // max: 18
      result[i] = sum % 10;
      carry = Math.floor(sum / 10); // 0 or 1
    });
    n1 = JSON.parse(JSON.stringify(n2));
    n2 = JSON.parse(JSON.stringify(result));
  }

  return parseInt(result.reverse().join(''));
}
