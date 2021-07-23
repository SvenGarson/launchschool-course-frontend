console.log('\n\nSolution to original problem');
for (let oddNumber = 1; oddNumber <= 99; oddNumber += 2) {
  console.log(oddNumber);
}

/*
    # further exploration

      Implement the same thing using another approach
*/

console.log('\n\nSolution to further exploration');

let number = 1;
while (true) {
  if (number % 2 === 1)
    console.log(number);

  number += 1;

  if (number >= 100)
    break;
}