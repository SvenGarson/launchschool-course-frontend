function numberIsEven(number) {
  return (number % 2) === 0;  
}

function isDoubleNumber(number) {
  const numberString = String(number);
  const numberOfDigits = numberString.length;

  if(!numberIsEven(numberOfDigits)) {
    return false;
  }

  const leftNumberHalf = numberString.substring(0, numberOfDigits / 2);
  const rightNumberHalf = numberString.substring(numberOfDigits / 2);

  return (leftNumberHalf === rightNumberHalf);
}

function twice(number) {
  let result;

  if (isDoubleNumber(number)) {
    result = number;
  } else {
    result = number * 2;
  }

  return result;
}

console.log(twice(37) === 74);
console.log(twice(44) === 44);
console.log(twice(334433) === 668866);
console.log(twice(444) === 888);
console.log(twice(107) === 214);
console.log(twice(103103) === 103103);
console.log(twice(3333) === 3333);
console.log(twice(7676) === 7676);