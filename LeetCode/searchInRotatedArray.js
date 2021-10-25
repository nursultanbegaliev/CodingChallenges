function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while(left <= right) {
    let mid = left + Math.floor((right - left) / 2);
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

function search(arr, target) {
  let left;
  let right;
  let pivot;
  if(arr.length > 1) {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] > arr[i+1]) {
        pivot = i+1;
      }
    }
  }
  if(arr.length == 1 && target == arr[0]) {
    return true;
  }

  if(target >= arr[0]) {
    left = 0;
    right = (pivot || arr.length - 1)- 1;
    while(left <= right) {
      let mid = Math.round((right - left) / 2) + left;
      if(arr[mid] == target) {
        return true;
      } else if(target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }else {
    left = pivot;
    right = arr.length - 1;
    while(left <= right) {
      let mid = Math.round((right - left) / 2) + left;
      if(arr[mid] == target) {
        return true;
      } else if(target < arr[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return false;
}

let arr = [5, 6, 7, 8, 1, 2, 3, 4];
let target = 2;
console.log(search(arr, target));