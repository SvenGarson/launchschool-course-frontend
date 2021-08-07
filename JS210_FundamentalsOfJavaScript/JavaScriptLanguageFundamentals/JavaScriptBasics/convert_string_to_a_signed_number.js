const charactersToNumbers = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
};

function stringToInteger(numberString) {
  const numberOfDigits = numberString.length;
  let currentPowerOfTen = 10 ** (numberOfDigits - 1);
  let integerValue = 0;

  for (const digitCharacter of numberString) {
    const digitCharacterValue = charactersToNumbers[digitCharacter];
    integerValue += currentPowerOfTen * digitCharacterValue;
    currentPowerOfTen /= 10;
  }

  return integerValue;
}

function isSignedNumberString(numberString) {
  return ['+', '-'].includes(numberString[0]);
}

function stringToSignedInteger(numberString) {
  if (numberString.length === 0) return undefined;

  const firstNumberCharacter = numberString[0];
  let numberPortionToConvert = numberString;
  
  // extract the numeric portion of numberString
  if (isSignedNumberString(numberString)) {
    numberPortionToConvert = numberString.substring(1);
  }

  const integerValue = stringToInteger(numberPortionToConvert);

  // negate the determined number only if sign is '-'
  const signedIntegerValue = (firstNumberCharacter === '-') ? -integerValue : integerValue;
  return signedIntegerValue;
}

console.log(`\nSolution using my original implementation`);
console.log(stringToSignedInteger('4321') === 4321);
console.log(stringToSignedInteger('-570') === -570);
console.log(stringToSignedInteger('+100') === 100);
console.log(stringToSignedInteger('') === undefined);

function stringToSignedIntegerShortVersion(numberString) {
  if (numberString.length === 0) return undefined;

  switch(numberString[0]) {
    case '+': return stringToInteger(numberString.substring(1));
    case '-': return -stringToInteger(numberString.substring(1));
    default : return stringToInteger(numberString);
  }
}

console.log(`\nSolution using the short implementation after looking up the solution`);
console.log(stringToSignedIntegerShortVersion('4321') === 4321);
console.log(stringToSignedIntegerShortVersion('-570') === -570);
console.log(stringToSignedIntegerShortVersion('+100') === 100);
console.log(stringToSignedIntegerShortVersion('') === undefined);