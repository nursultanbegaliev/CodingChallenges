function diamond(n){
  let upper = '';
  let arr = [];
  if(isNaN(n) || n % 2 == 0) {
     return null;
  }
  for(let i = 1; i <= n; i+=2) {
    let row = '';
    row = ' '.repeat((n - i) / 2) + '*'.repeat(i);
    upper += row + '\n';
    arr.push(row);
  }
  let nArr = arr;
  arr = arr.slice(0, -1);
  arr.reverse();
  let result = nArr.concat(arr);
  for(let i = 0; i < result.length; i++) {
    result[i] += '\n';
  }
  return result.join('');; 
}

console.log(diamond(13));