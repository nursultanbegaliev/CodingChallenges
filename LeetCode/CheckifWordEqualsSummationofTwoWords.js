function isSumEqual(firstWord, secondWord, targetWord) {
  let sum1 = "";
  let sum2 = "";
  let target = "";
  for (let i = 0; i < firstWord.length; i++) {
    sum1 += firstWord.charCodeAt(i) - 97;
  }
  for (let i = 0; i < secondWord.length; i++) {
    sum2 += secondWord.charCodeAt(i) - 97;
  }
  for (let i = 0; i < targetWord.length; i++) {
    target += targetWord.charCodeAt(i) - 97;
  }
  return parseInt(target) == parseInt(sum1) + parseInt(sum2) ? true : false;
}

let firstWord = "acb",
  secondWord = "cba",
  targetWord = "cdb";
console.log(isSumEqual(firstWord, secondWord, targetWord));
