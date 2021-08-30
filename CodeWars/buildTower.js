/* 
url = 'https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript'

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
*/

function towerBuilder(n) {
  let block = '*';
  let arrOfBlocks = [];
  for(let i = n; i > 0; i--) {
    let floorOfBlocks = block.repeat(i * 2 - 1);
    for(let j = i; j < n; j++) {
      floorOfBlocks = ' ' + floorOfBlocks + ' ';
    }
    arrOfBlocks.push(floorOfBlocks);
  }
  return arrOfBlocks.reverse();
}

function towerBuilder2(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}

towerBuilder(10);
towerBuilder(10);
console.log(towerBuilder(10));