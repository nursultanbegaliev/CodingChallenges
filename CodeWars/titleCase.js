// url = "https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript"
/* 
###Example

titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
*/

function titleCase(title, minorWords) {
  if(minorWords != undefined) {
    minorWords = minorWords.toLowerCase().split(' ');
  }else {
    minorWords = [];
  }
  
  title = title.toLowerCase().split(' ').map(el => {
    if(minorWords.includes(el)) {
      return el;
    }else {
      let newEl = el.charAt(0).toUpperCase() + el.slice(1);
      return newEl;
    }
  }).join(' ');
  title = title.charAt(0).toUpperCase() + title.slice(1);

  console.log(title);
  return title;
}

// let arr = ['good', 'nice'];
// let newArr = arr.map(e => {
//   let nEl = e.charAt(0).toUpperCase() + e.slice(1);
//   return nEl;
// });
//console.log(newArr);



titleCase('THE WIND IN THE WILLOWS');
