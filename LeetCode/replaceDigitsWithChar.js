function replaceDigits(s) {
  let res = s.split("");
  for (let i = 1; i < s.length; i += 2) {
    res[i] = "s";
  }
  return res.join("");
}

function shift(c, x) {
  let r = c.charCodeAt(0) + x;
  return String.fromCharCode(r);
}

console.log(shift("a", 1));

let s = "a1b2c3";
// console.log(replaceDigits(s));
