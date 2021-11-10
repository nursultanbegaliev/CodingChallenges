var firstUniqChar = function (s) {
  let dict = {};
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(dict).includes(s[i])) {
      dict[s[i]] += 1;
    } else {
      dict[s[i]] = 1;
    }
  }
  // console.log(dict);
  // console.log("hello");
  for (let i = 0; i < s.length; i++) {
    // console.log(dict[s[i]]);

    if (dict[s[i]] == 1) {
      return i;
    }
  }
  return -1;
};

let s = "loveleetcode";
// firstUniqChar(s)
console.log(firstUniqChar(s));
