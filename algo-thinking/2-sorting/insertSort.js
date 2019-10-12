// Insert Sort
function insertSort(arr) {
  const len = arr.length;
  let j, temp;

  for (let i = 1; i < len; i++) {
    temp = arr[i];
    j = i;
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }

  return arr;
}

const arr = [8, 7, 6, 5, 4, 3, 2, 1];
console.log(insertSort(arr));
