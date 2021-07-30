/*
    # Input
        - string
        - can have spaces, single and multiple anywhere in the string
        - can be empty in terms of :
            - containing only spaces
            - length === 0

    # Output
        - string
        - strip leading and trailing white space

    # Other requirements
        - internal spaces must stay intact
        - can use [] operator on string
        - can use string.length function
        - do NOT use any other built-in string functions/properties

    # Approach

      - find index of first non-space char from the front of the string
      - find index of first non-space char from the back of the string
      - return substring in that range

    # Edge cases

      > return new empty string when:
          - string.length === 0 
          - string contains only spaces

    # Examples  -  including edge cases  -  '.' represents space

      '...abc...'
          ^ ^
      ->3   5<- 

      first non space index = 3
      last non space index = 6
      return abc


      'abc...'
       ^ ^
     ->0 2<- 

      first non space index = 0
      last non space index = 2


      '....'
      
      first non space index = null
      last non space index = null

      if first is null then the whole string does not contain non-space character
      and we know to return an empty string

    # Pseudo approach
      firstNonSpaceIndex = null;
      lastNonSpaceIndex = null;

      from first to last char
        if not a space
          firstNon... = index
          break

      if firstNon === null
        # string can be empty or contain only spaces, either case
        # return empty string
        return ''

      Same thing from last to first char, but the string cannot be empty
      or contain only spaces anymore


      Return the substring in range


*/

function trim(string) {
  const stringLength = string.length;
  let leftNonSpaceCharacterIndex = null;

  for (let leftIndex = 0; leftIndex < stringLength; leftIndex += 1) {
    if (string[leftIndex] !== ' ') {
      leftNonSpaceCharacterIndex = leftIndex;
      break;  
    }
  }

  /*
      No non-space index found from left to right when:
        - string is empty i.e. string.length === 0
        - string contains only spaces

  */
  if (leftNonSpaceCharacterIndex === null) return '';

  // note: we know the string is not empty and does containe non-space chars

  // do the same from end to the start of the string
  let rightNonSpaceCharacterIndex = null;
  for (let rightIndex = (stringLength - 1); rightIndex >= 0; rightIndex -= 1) {
    if (string[rightIndex] !== ' ') {
      rightNonSpaceCharacterIndex = rightIndex;
      break;  
    }
  }

  return string.substring(leftNonSpaceCharacterIndex, rightNonSpaceCharacterIndex + 1);
}

console.log('\nSolutions to original problems');

console.log(trim('  abc  ') === "abc");
console.log(trim('abc   ')  === "abc");
console.log(trim(' ab c')   === "ab c");
console.log(trim(' a b  c') ===  "a b  c");
console.log(trim('      ')  === '');
console.log(trim('')        === '');

console.log('\nSolutions using the built in method');

console.log('  abc  '.trim() === "abc");
console.log('abc   '.trim()  === "abc");
console.log(' ab c'.trim()   === "ab c");
console.log(' a b  c'.trim() ===  "a b  c");
console.log('      '.trim()  === '');
console.log(''.trim()        === '');