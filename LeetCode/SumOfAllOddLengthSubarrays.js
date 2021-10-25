function sumOddLengthSubarrays(arr) {
  let res = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let end = i + 1;
    let start = n - i;
    let total = start * end;
    let odd = Math.floor(total / 2);
    if (total % 2 == 1) {
      odd++;
    }
    res += odd * arr[i];
  }
  return res;
}

let arr = [1, 4, 2, 5, 3];
console.log(sumOddLengthSubarrays(arr));
