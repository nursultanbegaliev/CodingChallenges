function countConsistentStrings(allowed, words) {
  allowed = "[" + allowed + "]";
  let re = new RegExp(allowed);
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    let count = 0;
    // console.log(words[i].length);
    for (let j = 0; j < words[i].length; j++) {
      if (re.test(words[i][j])) {
        count++;
      } else {
        break;
      }
    }
    if (count == words[i].length) {
      res++;
    }
  }
  return res;
}

let allowed = "ab",
  words = ["ad", "bd", "aaab", "baa", "badab"];
console.log(countConsistentStrings(allowed, words));
