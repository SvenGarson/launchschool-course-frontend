let total = 50;
let increment = 15;

function incrementBy(increment) {
  total += increment;
}

console.log(total);
incrementBy(10);
console.log(total);
console.log(increment);

/*

    # Explain what the program outputs

      line 1: 50
      line 2: 60
      line 3: 15

    # Explain how the relevant parts of the program work

      Line 8 outputs the value of the global variable 'total'
      as expected.

      We then invoke the 'incrementBy' function with an argument
      of 10, which actually increments the global variable 'total'
      by 10 because the parameter 'increment' created a new 
      local/function scope local variable called 'increment' which
      shadows the global 'increment' variable, which makes the global
      'increment' variable inaccessible.

      The last two logs then output the incremented global 'total'
      variable and the unchanged global 'increment' variable.
*/