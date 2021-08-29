// url = 'https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript'

/* 
89 = 8^1 + 9^2


sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
*/

function sumDigPow(a, b) {
  let arr = [];
  for(let i = a; i <= b; i++) {
    let numStr = String(i);
    let resPowOfNum = 0;
    for(let p = 1, j = 0; p <= numStr.length; p++, j++) {  
      resPowOfNum += Number(numStr[j]) ** p;
    }
    if(resPowOfNum == i) {
      arr.push(i);
    }
  }
  return arr;
}

sumDigPow(1, 1000);