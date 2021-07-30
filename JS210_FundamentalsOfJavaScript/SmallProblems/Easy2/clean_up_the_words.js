const SPACE_CHARACTER = ' ';

function isModernEnglishAlphaCharacter(character) {
  let result;

  // we need to account for the the character is 'undefined' when
  // the index used is out of bounds
  if (!character || character.length !== 1) { 
    result = false;
  } else {
    result = (character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z');
  }

  return result;
}

function cleanUp(string) {
  let cleanedUpString = '';

  for (let currentCharIndex = 0; currentCharIndex < string.length; currentCharIndex += 1) {
    const currentChar = string[currentCharIndex];
    const nextChar = string[currentCharIndex + 1];
    
    const currentCharIsAlpha = isModernEnglishAlphaCharacter(currentChar);
    const nextCharIsAlpha = isModernEnglishAlphaCharacter(nextChar);
    const nextCharIsPastLast = !nextChar;

    if (currentCharIsAlpha) {
      cleanedUpString += currentChar;
    } else if (nextCharIsAlpha || nextCharIsPastLast) {
      cleanedUpString += SPACE_CHARACTER;
    }
  }

  return cleanedUpString;
}

console.log(cleanUp("---what's my +*& line?") === ' what s my line ');

/*
    # Further exploration

      Implement the same solution using regular expressions.

    # Approach

      1. Select string portions that are not modern english alphabetical characters
      2. Replace these portions with a single space

*/

function cleanUpRegex(string) {
  return string.replaceAll(/[^(a-z)]+/gi, SPACE_CHARACTER);
}

console.log(cleanUpRegex("---what's my +*& line?") === ' what s my line ');