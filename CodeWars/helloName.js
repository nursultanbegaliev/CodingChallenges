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