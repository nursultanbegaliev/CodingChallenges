function numJewelsInStones(jewels, stones) {
  let res = 0;
  for(let i = 0; i < jewels.length; i++) {
    for(let j = 0; j < stones.length; j++) {
      if(jewels[i] == stones[j]) {
        res++;
      }
    }
  }
  return res;
}

let jewels = 'aA';
let stones = 'aAAbbbb';
let stones2 = ['a', 'b', 'c'];
stones2[0] = 'B';

//console.log(numJewelsInStones(jewels, stones));

stones[0] = 'b';
stones[1] = 'B';
console.log(stones);
console.log(stones2);
