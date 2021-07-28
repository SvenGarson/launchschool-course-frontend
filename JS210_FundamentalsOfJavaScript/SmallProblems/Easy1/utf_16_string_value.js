function utf16Value(utf16String) {
  let sum = 0

  for (let currentCharIndex = 0; currentCharIndex < utf16String.length; currentCharIndex += 1) {
    sum += utf16String.charCodeAt(currentCharIndex);
  }

  return sum;
}

console.log(utf16Value('Four score') === 984);
console.log(utf16Value('Launch School') === 1251);
console.log(utf16Value('a') === 97);
console.log(utf16Value('') === 0);

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA) === 937);
console.log(utf16Value(OMEGA + OMEGA + OMEGA) === 2811);