function stringEmpty(string) {
  return string.length === 0;
}

function printAllCharacters(string) {
  for (char of string) console.log(char);
}

function splitString(string, delimiter = null) {
  if (delimiter === null) {
    console.log('ERROR: No delimiter');
  }

  // note: we know the delimiter is defined
  if (delimiter === null || stringEmpty(string)) {
    return;
  }

  // note: we know the delimiter length is zero or positive
  if(stringEmpty(delimiter)) {
    printAllCharacters(string);
    return;
  }

  const splits = [];
  let currentSplit = '';

  for (let stringIndex = 0; stringIndex <= string.length; stringIndex += 1) {
    const currentCharacter = string[stringIndex];
    const currentIsLastCharacter = (stringIndex === (string.length - 1)) ? true : false;
    const currentIsDelimiter = (currentCharacter === delimiter);

    if (!currentIsDelimiter || (currentIsLastCharacter && !currentIsDelimiter)) {
      currentSplit += currentCharacter;
    }

    // note: we know that all the desired character are added to the split
    if (currentIsLastCharacter || currentIsDelimiter) {
      splits.push(currentSplit);
      currentSplit = '';
    }
  }

  // log all splits and change empty ones to a message
  for (let someSplit of splits) {
    const rectifiedSplit = (someSplit.length === 0) ? ' (this is a blank line)' : someSplit;
    console.log(rectifiedSplit);
  }
}

console.log('\nSolution to original problem [1]');
splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

console.log('\nSolution to original problem [2]');
splitString('hello');
// logs:
// ERROR: No delimiter

console.log('\nSolution to original problem [3]');
splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

console.log('\nSolution to original problem [4]');
splitString('hello', ';');
// logs:
// hello

console.log('\nSolution to original problem [5]');
splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello

