var isPrefixString = function (s, words) {
  let test = "";
  for (let i = 0; i < words.length; i++) {
    if (s.includes(words[i])) {
      test += words[i];
      if (test === s) {
        return true;
      }
    }
    if (!s.includes(words[i])) {
      return false;
    }
  }
  return false;
};

let s = "iloveleetcode",
  words = ["i", "love", "leetcode", "apples"];

console.log(isPrefixString(s, words));
