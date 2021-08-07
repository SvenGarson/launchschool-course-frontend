const numbersToCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  if (number === 0) return '0';

  const numberCharacters = [];
  while (number !== 0) {
    const numberOnesPlace = number % 10;
    const numberOnesPlaceCharacter = numbersToCharacters[numberOnesPlace];

    numberCharacters.unshift(numberOnesPlaceCharacter);

    number = Math.floor(number / 10);
  }

  return numberCharacters.join('');
}

function signForSignedNumber(signedNumber) {
  let resultSign = '';

  if (signedNumber < 0) {
    resultSign = '-';
  } else if (signedNumber > 0) {
    resultSign = '+';
  }

  return resultSign;
}

function signedIntegerToString(signedNumber) {
  const unsignedNumber = Math.abs(signedNumber);
  const unsignedNumberString = integerToString(unsignedNumber);
  const sign = signForSignedNumber(signedNumber);

  return sign + unsignedNumberString;
}

console.log('\nSolution using my original solution')
console.log(signedIntegerToString(4321) ===  "+4321");
console.log(signedIntegerToString(-123) ===  "-123");
console.log(signedIntegerToString(0) ===  "0");

function signedIntegerToStringShorterVersion(signedNumber) {
  if (signedNumber < 0) {
    return '-' + integerToString(-signedNumber);
  } else if (signedNumber > 0) {
    return '+' + integerToString(signedNumber);
  } else {
    return integerToString(signedNumber);
  }
}

console.log('\nSolution using the shorte solution after looking at the reference solution')
console.log(signedIntegerToStringShorterVersion(4321) ===  "+4321");
console.log(signedIntegerToStringShorterVersion(-123) ===  "-123");
console.log(signedIntegerToStringShorterVersion(0) ===  "0");