function findContentChildren(g, s) {
  let content = 0;
  let index = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  for (let i = 0; i < g.length; i++) {
    if (s[index]) {
      for (let j = index; j < s.length; j++) {
        if (g[i] <= s[j]) {
          content++;
          index = j + 1;
          break;
        }
      }
    }
  }
  return content;
}

let g = [1, 2, 3],
  s = [1, 1];
console.log(findContentChildren(g, s));
