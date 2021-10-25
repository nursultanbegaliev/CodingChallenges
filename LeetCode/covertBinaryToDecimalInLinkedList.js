function getDecimalValue(head) {
  let sum = 0;
  head.reverse();
  for (let i = 0; i < head.length; i++) {
    if (head[i] == 1) {
      sum += 2 ** i;
    }
  }
  return sum;
}

let arr = [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0];
console.log(getDecimalValue(arr));
