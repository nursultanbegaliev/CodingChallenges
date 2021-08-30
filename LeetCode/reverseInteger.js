// url = 'https://leetcode.com/problems/reverse-integer'

/* 
Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321

*/

var reverse = function(x) {
  x = String(x);
  let res = '';

  for(let i = x.length-1; i >= 0; i--) {
      res += x[i];
  }
  let lastIndex = res.length - 1;
  if(res[lastIndex] == '-') {
    res = res.slice(0, -1);
    res = '-' + res;
  }
  
  return Number(res);
}

// cool solution
var reverse2 = function(x) {
  let ans = parseFloat(x.toString().split('').reverse().join('')) 
  return Math.pow(2, 31) < ans ? 0 : ans * Math.sign(x);
};

let str = '124-'
let num = -123;
console.log(reverse2(num));
console.log(parseFloat(str));
