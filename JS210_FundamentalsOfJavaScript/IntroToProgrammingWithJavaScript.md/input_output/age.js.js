let rlSync = require('readline-sync');
let currentAge = parseInt(rlSync.question('How old are you now?\n'));

let skippedYears = 10;

console.log(`You are ${currentAge} years old.`);
console.log(`In ${skippedYears} years, you will be ${currentAge + skippedYears} years old.`);

skippedYears += 10;
console.log(`In ${skippedYears} years, you will be ${currentAge + skippedYears} years old.`);

skippedYears += 10;
console.log(`In ${skippedYears} years, you will be ${currentAge + skippedYears} years old.`);

skippedYears += 10;
console.log(`In ${skippedYears} years, you will be ${currentAge + skippedYears} years old.`);
