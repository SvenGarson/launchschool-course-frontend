function padLeft(number) {
  const stringNumber = String(number);
  switch (stringNumber.length) {
    case 1:  return `  ${stringNumber}`;
    case 2:  return ` ${stringNumber}`;
    default: return stringNumber;
  }
}

console.log('\nThe flawed version')
for (let i = 1; i < 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

console.log('\nThe fixed version')
for (let i = 1; i <= 10; i += 1) {
  let row = '';
  for (let j = 1; j <= 10; j += 1) {
    row += `${padLeft(i * j)} `;
  }

  console.log(row);
}

/*
  
    # Does the above program output the expected result of a multiplication
    # table from number in range [1; 10]?
    #
    # Why or why not?

      The for loop on line 10 iterates, without considering the loop
      internals, iterates through 'i' in range [1; 9] instead of [1; 10]
      like the iteration on line 12 does it.

      The effect is that only 9 lines of the intended multiplication
      table are generated.

      To fix this, the for loop conditional on line 10 must be changed
      from 'i < 10' t0 'i <= 10'.

*/