function shuffle(nums, n) {
  let firstPart = nums.slice(0, n);
  let secondPart = nums.slice(n);
  let res = [];
  for(let i = 0; i < n; i++) {
    res.push(firstPart[i]);
    res.push(secondPart[i]);
  }
  return res;
}

function shuffle(nums, n) {
  let res = [];
  for(let i = 0; i < n; i++) {
    res.push(nums[i], nums[n + i]);
  }
  return res;
}
