function getMin(str, operators = [], numbers = []) {
  // 55 - (50 + 40) = -35
  // 第一个字符一定是数字 => 第一个数一定是正数
  // 0000009 - 0000009 = 0
  operators = str.match(/\W/g);
  numbers = str.split(/\W/).map(e => parseInt(e));

  if (numbers.length === 0) return;
  if (!operators) return numbers[0];

  let i = 0,
    j = 1,
    result = numbers[0];
  while (i < operators.length) {
    // console.log(`Round ${i} starts: op => ${operators[i]}`);
    // if +, go on
    if (operators[i] === '+') {
      result += numbers[i + 1];
    } else {
      // if -, check the next one
      // if the next one is -, goes on
      if (operators[j] === '-') {
        result -= numbers[i + 1];
      } else {
        // if the next is +, check till you meet -
        // console.log('dif');
        let temp = numbers[j];

        while (operators[j] === '+') {
          temp += numbers[j + 1];
          // console.log('temp:', temp);
          j++;
        }
        result -= temp;
        i = j - 1;
      }
    }
    // console.log(`Round${i}: result=${result}`);

    i++;
    j = i + 1;
  }
  return result;
}

module.exports = getMin;
