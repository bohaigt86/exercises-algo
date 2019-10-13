function binaryInsertSort(arr) {
  const len = arr.length;
  if (len < 2) return arr;

  let temp, mid, head, end, j;

  if (arr[1] < arr[0]) {
    temp = arr[1];
    arr[1] = arr[0];
    arr[0] = temp;
  }

  for (let i = 2; i < len; i++) {
    head = 0;
    end = i;
    j = i;

    if (arr[i] < arr[i - 1]) {
      while (head < end) {
        mid = Math.floor((head + end) / 2);
        console.log(`Round${i}: mid=${mid}: head=${head}: end=${end}`);

        if (arr[i] >= arr[mid - 1] && arr[i] <= arr[mid]) {
          break;
        } else if (arr[i] >= arr[mid]) {
          head = mid;
        } else {
          end = mid;
        }
      }

      temp = arr[i];
      j = i;
      while (j > mid) {
        arr[j] = arr[j - 1];
        j--;
      }
      arr[mid] = temp;
    }
  }

  return arr;
}

const arr = [2, 10, 3, 4, 1];

console.log(binaryInsertSort(arr));
