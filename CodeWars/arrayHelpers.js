/*
url = "https://www.codewars.com/kata/525d50d2037b7acd6e000534/train/javascript"

This kata is designed to test your ability to extend the 
functionality of built-in classes. In this case, we want you 
to extend the built-in Array class with the following 
methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
*/


Array.prototype.square = function() {
  let arr = new Array();
  for(let i = 0; i < this.length; i++) {
    if(!isNaN(this[i])) {
      arr.push(this[i]**2);
    }
  }
  return arr;
};

Array.prototype.cube = function() {
  let arr = new Array();
  for(let i = 0; i < this.length; i++) {
    if(!isNaN(this[i])) {
      arr.push(this[i]**3);
    }
  }
  return arr;
};
Array.prototype.average = function() {
  let res = 0;
  let quantity = 0;
  for(let i = 0; i < this.length; i++) {
    res += this[i];
    quantity++;
  }
  if(res == 0) {
    return NaN;
  }
  return res / quantity;
};
Array.prototype.sum = function() {
  let res = 0;
  for(let i = 0; i < this.length; i++) {
    res += this[i];
  }
  return res;
};
Array.prototype.even = function() {
  let arr = new Array();
  for(let i = 0; i < this.length; i++) {
    if(this[i] % 2 == 0) {
      arr.push(this[i]);
    }
  }
  return arr;
};
Array.prototype.odd = function() {
  let arr = new Array();
  for(let i = 0; i < this.length; i++) {
    if(this[i] % 2 != 0) {
      arr.push(this[i]);
    }
  }
  return arr;
};

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.odd());
