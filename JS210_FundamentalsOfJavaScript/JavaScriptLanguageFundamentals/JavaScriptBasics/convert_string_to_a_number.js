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

console.log(stringToInteger('4321') === 4321);
console.log(stringToInteger('570') === 570);