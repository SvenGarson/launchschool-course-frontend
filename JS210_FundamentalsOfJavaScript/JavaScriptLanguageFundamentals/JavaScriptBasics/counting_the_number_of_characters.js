function askForPhrase() {
  const rlSync = require('readline-sync');

  return rlSync.question('Please enter a phrase: ');
}

let somePhrase = askForPhrase();
console.log(`There are ${somePhrase.length} characters in ${somePhrase}`);

somePhrase = askForPhrase();
let characterWithoutSpaces = somePhrase.replaceAll(' ', '');
console.log(`There are ${somePhrase.length} characters in ${somePhrase} with spaces`);
console.log(`There are ${characterWithoutSpaces.length} characters in ${somePhrase} without spaces`);