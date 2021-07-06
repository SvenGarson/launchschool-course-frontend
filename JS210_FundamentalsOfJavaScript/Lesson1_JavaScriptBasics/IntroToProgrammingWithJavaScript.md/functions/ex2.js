let rlSync = require('readline-sync');

function firstName(rlSync) {
  rlSync.question('Enter your first name: ');
}

function lastName(rlSync) {
  rlSync.question('Enter your last name: ');
}

console.log(firstName(rlSync));
let fullName = (firstName(rlSync) + ' ' + lastName(rlSync));

console.log(`Good Morning, ${fullName}.`);
console.log(`Good Afternoon, ${fullName}.`);
console.log(`Good Evening, ${fullName}.`);