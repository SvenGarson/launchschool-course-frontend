function stringy(number) {
  const binarySequenceArray = Array(number);

  for (let sequenceIndex = 0; sequenceIndex < number; sequenceIndex += 1) {
    const sequenceIndexIsEvenNumber = (sequenceIndex % 2) === 0;
    const binarySequenceCharacter = sequenceIndexIsEvenNumber ? '1' : '0';

    binarySequenceArray[sequenceIndex] = binarySequenceCharacter;
  }

  return binarySequenceArray.join('');
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");