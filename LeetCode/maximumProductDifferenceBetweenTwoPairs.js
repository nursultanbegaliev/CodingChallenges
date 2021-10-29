function maxProductDifference(nums) {
  nums = nums.sort((a, b) => a - b);
  let uniq = [...new Set(nums)];
  let small = uniq[0] * uniq[1];
  let len = uniq.length;
  let big = uniq[len - 1] * uniq[len - 2];
  return big - small;
}

let nums = [1, 6, 7, 5, 2, 4, 10, 6, 4];
console.log(nums.sort());
console.log(maxProductDifference(nums));
