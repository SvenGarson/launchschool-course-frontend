let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

// show how to access the name of the person
let personNameDotNotation = person.name;
let personNameBracketNotation = person['name'];
let namesTheSame = (personNameDotNotation === personNameBracketNotation);
console.log(`Dot and Bracket return same name: ${namesTheSame}`);
console.log(`person.name: ${personNameDotNotation}`);
console.log(`person[name]: ${personNameBracketNotation}`);