
function calculate( currentArray, currentNumber){
  let emptyArr = [];
  for(let i= 0; i < currentArray.length ; ++i){
    if(currentArray[i] > currentNumber){
      emptyArr.push(currentArray[i]);
    }
  }
  (emptyArr.length === 0) ? console.log("“Such values do not exist.”") : console.log(emptyArr);
}

calculate([], );