function balancedStringSplit(s) {
  let l = 0;
  let r = 0;
  let count = 0;
  for(let i = 0; i < s.length; i++) {
    if(s[i] == 'R') {
      r++;
    }else {
      l++;
    }
    
    if(r == l) {
      count++;
      r = 0;
      l = 0;
    }
  }
  return count;
};

let s = "RLRRLLRLRL";
let s2 = "RLLLLRRRLR";
let s3 = "LLLLRRRR";
let s4 = "LRRLRRRLLRLLRLLRLRRL";


// balancedStringSplit(s);
console.log(balancedStringSplit(s3));

