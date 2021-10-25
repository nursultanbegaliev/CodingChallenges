function chekcIfPangram(sentence) {
  let test = "";
  for (let i = 0; i < sentence.length; i++) {
    if (test.includes(sentence[i])) {
      return false;
    } else {
      test += sentence[i];
    }
  }
  return true;
}

let s = "abcdefg";
let se = "thequickbrownfoxjumpsoverthelazydog";
console.log(chekcIfPangram(s));
