function createTargetArray(nums, index) {
  let arr = [];
  for(let i = 0; i < nums.length; i++) {
    arr = arr.splice(index[i], nums[i]);
  }
  return arr;
};

let nums = [0,1,2,3,4], index = [0,1,2,2,1];

console.log(createTargetArray(nums, index));