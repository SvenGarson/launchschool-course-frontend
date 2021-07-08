let rlSync = require('readline-sync');
let currentAge = parseInt(rlSync.question('How old are you now?\n'));

console.log(`You are ${currentAge} years old.`);
for(let skippedYears = 10; skippedYears <= 40; skippedYears += 10) {
  console.log(`In ${skippedYears} years, you will be ${currentAge + skippedYears} years old.`);
}