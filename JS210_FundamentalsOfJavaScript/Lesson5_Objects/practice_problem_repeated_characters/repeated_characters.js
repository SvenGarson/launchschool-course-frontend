function uniqueCharacterStringFrom(string) {
  const uniqueCharacterSet = new Set();

  for (const uniqueCharacterCandidate of string) {
    uniqueCharacterSet.add(uniqueCharacterCandidate);
  }

  return Array.from(uniqueCharacterSet).join('');
}

function repeatedCharacters(string) {
  string = string.toLowerCase();
  const uniqueCharacterString = uniqueCharacterStringFrom(string);

  const characterCounts = {};
  for (const uniqueCharacter of uniqueCharacterString) {
    // track counts only if >= 2
    const characterPattern = new RegExp(`${uniqueCharacter}`, 'g');
    const characterCount = string.match(characterPattern).length;
    
    if (characterCount >= 2) {
      characterCounts[uniqueCharacter] = characterCount;
    }
  }

  return characterCounts;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }