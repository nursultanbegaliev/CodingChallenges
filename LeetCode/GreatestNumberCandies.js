function kidsWithCandies(candies, extraCandies) {
  let maxCandie = 0;
  for(let i = 0; i < candies.length; i++) {
    if(candies[i] >= maxCandie) {
      maxCandie = candies[i];
    }
  }
  let result = [];
  for(let i = 0; i < candies.length; i++) {
    let currentExtra = candies[i] + extraCandies;
    if(currentExtra >= maxCandie) {
      result.push(true);
    }else {
      result.push(false);
    }
  }
  return result;
}

let candies = [2,3,5,1,3];
let extraCandies = 3;

console.log(kidsWithCandies(candies, extraCandies));