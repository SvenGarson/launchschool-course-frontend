function isModernEnglishCharacter(character) {
  const lowercaseCharacter = character.toLowerCase();
  return (lowercaseCharacter >= 'a' && lowercaseCharacter <= 'z');
}

function characterIsLowercase(character) {
  return character.toLowerCase() === character;
}

function lowercaseAlphabetIndex(character) {
  return character.charCodeAt(0) - 'a'.charCodeAt(0);  
}

function rot13AlphabetIndex(character) {
  return 'a'.charCodeAt(0) + ((character + 13) % 26);
}

function rot13(string) {
  rot13String = '';

  for (const currentCharacter of string) {
    let convertedCharacter = currentCharacter;

      if (isModernEnglishCharacter(currentCharacter)) {
        const isLowercase = characterIsLowercase(currentCharacter);

        const currentAlphabetIndex = lowercaseAlphabetIndex(currentCharacter.toLowerCase());
        const rotatedAlphabetIndex = rot13AlphabetIndex(currentAlphabetIndex);
        
        const rotatedCharacter = String.fromCharCode(rotatedAlphabetIndex);
        const rot13CharacterInOriginalCase = isLowercase ? rotatedCharacter : rotatedCharacter.toUpperCase();
        
        convertedCharacter = rot13CharacterInOriginalCase;
      }

      // add
      rot13String += convertedCharacter;
  } 

  return rot13String;
}

const firstRot13 = rot13('Teachers open the door, but you must enter by yourself.');
const firstExpectedResult = 'Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.';
console.log(`First test passed: ${firstRot13 === firstExpectedResult}`);

const secondRot13 = rot13(rot13('Teachers open the door, but you must enter by yourself.'));
const secondExpectedResult = 'Teachers open the door, but you must enter by yourself.';
console.log(`Second test passed: ${secondRot13 === secondExpectedResult}`);
