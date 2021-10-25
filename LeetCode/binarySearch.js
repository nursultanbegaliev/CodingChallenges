function search(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while(left <= right) {
    let mid = left + Math.round((right - left) / 2);
    console.log(mid);
    if(arr[mid] == target) {
      return true;
    } else if(target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 9;

console.log(search(arr, target))