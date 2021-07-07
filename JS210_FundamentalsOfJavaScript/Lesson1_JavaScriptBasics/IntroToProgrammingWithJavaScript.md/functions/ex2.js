let rlSync = require('readline-sync');

function answerForQuestion(theQuestion) {
  return rlSync.question(theQuestion);
}

function firstName(rlSync) {
  return answerForQuestion('Enter your first name: ');
}

function lastName(rlSync) {
  return answerForQuestion('Enter your last name: ');
}

let fullName = (firstName(rlSync) + ' ' + lastName(rlSync));

console.log(`Good Morning, ${fullName}.`);
console.log(`Good Afternoon, ${fullName}.`);
console.log(`Good Evening, ${fullName}.`);