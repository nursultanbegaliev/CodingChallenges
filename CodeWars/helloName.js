// 8 kyu
function convert(value) {
  return "Hello, " +  value + '!';
}

function hello(name) {
  if(name == undefined || name == '') {
    name = 'World';
  }
  name = name.toLowerCase();
  name = name[0].toUpperCase() + name.slice(1);
  return convert(name);
}


// console.log(5 / 2);
let b = 0;
let a = b++;
console.log(a);
console.log(b);
console.log(a == b);
// for(let i = 0; i < 5; ++i) {
//   b++;
  
//   // console.log(b, a);
//   // console.log(a);
// }
// console.log(b == a++);