/*
url = 'https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript'

Step 1: Create a function called encode() to replace all the lowercase vowels 
in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
*/
let arr = [0, 'a', 'e', 'i', 'o', 'u'];
let arrOfNums = [1, 2, 3, 4, 5];

function encode(string) {
  for(let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    if(arr.includes(char)) {
      string = string.replace(char, arr.indexOf(char));
    }
  }
  return string;
}

function decode(string) {
  for(let i = 0; i < string.length; i++) {
    let char = Number(string.charAt(i));
    if(arrOfNums.includes(char)) {
      string = string.replace(String(char), arr[char]);
    }
  }
  return string;
}

// turn vowels into numbers
function encode2(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode2(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
}

let string = 'h2ll4';


console.log(decode(string));