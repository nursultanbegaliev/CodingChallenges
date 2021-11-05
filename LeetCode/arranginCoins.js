function arrangeCoins(n) {
  let rows = 1;
  let completed = 0;
  for (;;) {
    if (n - rows < 0) {
      break;
    } else {
      n -= rows;
      completed++;
      rows++;
    }
  }
  return completed;
}

console.log(arrangeCoins(1));
