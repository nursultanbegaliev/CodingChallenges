/* 
url = 'https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript'

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/


function solution(string) {
  let res = [];
  let arrOfIndexes = [];
  for(let i = 0; i < string.length; i++) {
    let char = string[i];
    if(char === char.toUpperCase()) {
      arrOfIndexes.push(i);
    }
  }
  arrOfIndexes.push(string.length);
  for(let i = 0, j = 0; i < arrOfIndexes.length; i++) {
    let index = arrOfIndexes[i];
    let word = string.slice(j, index);
    res.push(word);
    j = index;
  } 
  res = res.join(' ');
  return res;
}

function solution2(string) {
  let res = string.split('').map(el => {
    if(el === el.toUpperCase()) {
      el = ' ' + el;
    }
    return el;
  });
  console.log(res.join(''));
  return res.join('');
}

let test = 'camelCaseStyle';

solution2(test);
//console.log('good' + ['morning']);

