/*
    # Input
        - string
        - contains alphanumerical character
        - all ascii characters
        - letters can be uppercase or lowercase

    # Output
        - string
        > characters converted:
            - uppercase to lowercase
            - lowercase stays as is
            - digits stay as is


    # Other requirements
        > can use the following methods:
            - fromCharCode ==> char code to char string
            - charCodeAt   ==> char string to char code
            - []
            - length property
            - NO OTHER BUILT-IN STRING CLASSES


    # Approach
      
      chars can be upper; lower or digits
      only convert uppercase to lowercase
      this means any char code in range [65, 90] to lowercase using the + 32 trick

    # Approach Pseudo

      convertedString = ''     

      for every char in string
        charCode = String.charCodeAt(char);

        if char.uppercaseChar (in range [65; 90])
          lowerCaseCharCode = charCode + 32;
          lowerCaseChar = String.fromCharCode(lowerCaseCharCode);
          convertedString += lowerCaseChar
        else (not an uppercase character)
          // add the char as is

*/

function numberInInclusiveRange(number, min, max) {
  return (number >= min && number <= max); 
}

function toLowerCase(string) {
  let convertedString = '';

  for (const currentCharacter of string) {
    const currentCharacterCode = currentCharacter.charCodeAt(0);
    let convertedCharacterCode = currentCharacterCode; 
    
    // convert character to lowercase only for character A to Z
    if (currentCharacter >= 'A' && currentCharacter <= 'Z') {
      convertedCharacterCode = currentCharacterCode + 32;
    }

    // convert the code back to a character
    convertedString += String.fromCharCode(convertedCharacterCode);
  }

  return convertedString;
}

console.log(toLowerCase('ALPHABET') === "alphabet");
console.log(toLowerCase('123') === "123");
console.log(toLowerCase('abcDEF') === "abcdef");