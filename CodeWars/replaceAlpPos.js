// Replace with alphabet position

function alphabetPosition(text) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let arr = [];
  for(let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if(alphabet.includes(char)) {
      let numberOfchar = alphabet.indexOf(char) + 1;
      arr.push(numberOfchar);
    }
  }
  arr = arr.join(' ');
  return arr;
}
