function crunch(string) {
  let collapsedDuplicatesString = '';

  let lastCharacter = null;
  for (let currentCharacter of string) {
    if (currentCharacter === lastCharacter)
      continue;

    // we know the currentCharacter is different from the last character
    collapsedDuplicatesString += currentCharacter;

    lastCharacter = currentCharacter;
  }

  return collapsedDuplicatesString;
}

console.log('\nSolution to original problem:');
console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch('4444abcabccba') === "4abcabcba");
console.log(crunch('ggggggggggggggg') === "g");
console.log(crunch('a') === "a");
console.log(crunch('') === "");

/*

    # Further exploration

      Since reference algorithm looks forward in the string, forwards
      as in compares the current with the next character in the string,
      the last character in the string would not be added since it is
      not checked against the next character.

*/


function faultyCrunchToTestAssumptions(text) {
  let index = 0;
  let crunchText = '';

  while (index < text.length - 1) { // do not iterate last character
    if (text[index] !== text[index + 1]) {
      crunchText += text[index];
    }

    index += 1;
  }

  return crunchText;
}

console.log('\nChecking my assumptions to further exploration question:');
console.log(faultyCrunchToTestAssumptions('ddaaiillyy ddoouubbllee') === "daily doubl");
console.log(faultyCrunchToTestAssumptions('4444abcabccba') === "4abcabcb");
console.log(faultyCrunchToTestAssumptions('a') === "");