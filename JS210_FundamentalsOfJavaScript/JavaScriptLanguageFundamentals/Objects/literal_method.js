const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

//console.log(`${person.firstName} ${person.lastName}`);
console.log('\nconsole.log directly')
console.log(person.firstName)

console.log('\nstring interpolation')
console.log(`${person.firstName}`)

console.log('\nstring concatenation')
console.log(' ' + person.firstName)

/*

    What is the result when the code on line 10 is executed?

      The result is not as expected.

      The object properties 'firstName' and 'lastName' are both
      functions and not executes when the are accesses using dot
      notation and thus the console.log statement outputs the
      function as text description.

*/