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

console.log(integerToString(4321) === "4321");
console.log(integerToString(0) === "0");
console.log(integerToString(5000) === "5000");