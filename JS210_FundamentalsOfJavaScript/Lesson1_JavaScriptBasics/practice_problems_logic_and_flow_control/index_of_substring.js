function indexOf(firstString, secondString) {
  for (let fIndex = 0; fIndex < firstString.length; fIndex += 1) {
    // detect start of matching sub-string
    if (firstString[fIndex] !== secondString[0]) continue;

    // note: this index could be a possible substring

    // now check whether secondString fully contained in firstString
    let firstContainsSecond = true;
    for (let sIndex = 0; sIndex < secondString.length; sIndex += 1) {
      const sIndexInFirst = fIndex + sIndex;
      const fCurrent = firstString[sIndexInFirst];
      const sCurrent = secondString[sIndex];

      if (fCurrent !== sCurrent) {
        firstContainsSecond = false;
        break;
      }
    }

    // we want to return the index when they match
    if (firstContainsSecond === true) return fIndex;
  }

  // note: we know that not matching index has been found
  return -1;
}

function lastIndexOf(firstString, secondString) {
  // this time just iterate from the end to the start of the firstString
  for (let fIndex = (firstString.length - 1); fIndex >= 0; fIndex -= 1) {
    // detect start of matching sub-string
    if (firstString[fIndex] !== secondString[0]) continue;

    // note: this index could be a possible substring

    // now check whether secondString fully contained in firstString
    let firstContainsSecond = true;
    for (let sIndex = 0; sIndex < secondString.length; sIndex += 1) {
      const sIndexInFirst = fIndex + sIndex;
      const fCurrent = firstString[sIndexInFirst];
      const sCurrent = secondString[sIndex];

      if (fCurrent !== sCurrent) {
        firstContainsSecond = false;
        break;
      }
    }

    // we want to return the index when they match
    if (firstContainsSecond === true) return fIndex;
  }

  // note: we know that not matching index has been found
  return -1;
}

console.log('\nSolutions to original problems');

console.log(indexOf('Some strings', 's') === 5);
console.log(indexOf('Blue Whale', 'Whale') === 5);
console.log(indexOf('Blue Whale', 'Blute') === -1);
console.log(indexOf('Blue Whale', 'leB') === -1);

console.log(lastIndexOf('Some strings', 's') === 11);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale') === 19);
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all') === -1);

function lastIndexOfFurtherExploration(firstString, secondString) {
  let skippedCharacters = 0;
  let solutionFound = false;

  while (true) {
    let firstIndex = indexOf(firstString, secondString);

    // done if no matching index could be found
    if (firstIndex === -1) break;

    // note: firstIndex is a valid index
    solutionFound = true;

    // get ready for index scan starting after the found index
    let charactersToSkip = firstIndex + 1;
    skippedCharacters += charactersToSkip;
    firstString = firstString.substring(charactersToSkip, firstString.length);
  }

  // when solution found, skippedCharacters it at least 1
  return solutionFound ? (skippedCharacters - 1) : -1;
}


console.log('\nSolutions to further exploration');

console.log(lastIndexOfFurtherExploration('Some strings', 's') === 11);
console.log(lastIndexOfFurtherExploration('Drunter Und Drueber', 'Drunter') === 0);
console.log(lastIndexOfFurtherExploration('Drunter Und Drueber und Drunter', 'Drunter') === 24);
console.log(lastIndexOfFurtherExploration('Blue Whale, Killer Whale', 'Whale') === 19);
console.log(lastIndexOfFurtherExploration('Blue Whale, Killer Whale', 'all') === -1);