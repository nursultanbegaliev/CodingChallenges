// My solution didn't work :(
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  
  let savings = 0;
  let i = 0;
  
  for(;;) {
    let sum = 0;
    
    // Check for every two month
    if(i % 2 != 0) {
      percentLossByMonth += 0.5;
    }
    // Calculations for the end of the month
    startPriceNew -= decreaseWithPercent(startPriceNew, percentLossByMonth);
    startPriceOld -= decreaseWithPercent(startPriceOld, percentLossByMonth);
    savings += savingperMonth;

    // Added savings and price of old car
    sum = startPriceOld + savings;

    if(sum >= startPriceNew) {
      
      return [(i + 1), Math.floor(sum - startPriceNew)];

    }

    i++;
  }
}

function decreaseWithPercent(value, percent) {
  return value * percent / 100;
}

function nbMonths2(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  var months = 0, moneySaved = 0;
  while (startPriceNew > startPriceOld + moneySaved){
    moneySaved += savingperMonth;
    startPriceOld -= (startPriceOld * (percentLossByMonth / 100));
    startPriceNew -= (startPriceNew * (percentLossByMonth / 100));
    months++;
    if (months % 2 == 1){
      percentLossByMonth += .5;
    }
  }
  return [months, Math.round(startPriceOld + moneySaved - startPriceNew)];
}


// Test.assertSimilar(nbMonths(2000, 8000, 1000, 1.5), [6, 766])
// Test.assertSimilar(nbMonths(12000, 8000, 1000, 1.5) ,[0, 4000])

console.log(nbMonths2(2000, 8000, 1000, 1.5));
console.log(nbMonths2(12000, 8000, 1000, 1.5));


