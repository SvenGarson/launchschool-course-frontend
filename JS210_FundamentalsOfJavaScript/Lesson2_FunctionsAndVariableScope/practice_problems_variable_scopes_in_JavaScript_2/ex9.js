let a = 'outer';
let b = 'outer';

console.log(a);   // outputs: outer
console.log(b);   // outputs: outer
setScope(a);      // accessible because of hoisting
console.log(a);   // still outputs: outer
console.log(b);   // outputs: inner

function setScope(foo) {
  foo = 'inner';  // foo argument is a string, so 'foo' is a primitive copy
  b = 'inner';    // 'b' is a global variable so it is re-assigned
}

/*

    # Explain what the program outputs

      line 1: outer
      line 2: outer
      line 3: outer
      line 4: inner


    # Explain how the relevant parts of the program work

      The first two lines declare global variables that are not added
      to the global/window object.

      The first two logs output the initial value of both variables
      'a' and 'b'.

      Then the global 'setScope' function is invoked and the global
      'a' variable with the value 'outer' is passed as an argument.
      Line 11 re-assigns the 'foo' variable to the value 'inner', 
      which does not affect the global variable that was passed
      because strings are primitives and thus passed by value i.e.
      copied to local variables inside functions. In other words, the
      first re-assignment does not affect the global variable 'a'.

      The second re-assignment on line 12 does affect the global
      variable 'b' because JavaScript scans the scope upwards and
      finds it at the global scope and re-assigns it to the value
      'inner'.
    
*/

// Testing my assumptions
console.log('\n\nTesting my assumptions: ');
console.log(a === 'outer');
console.log(b === 'inner');
console.log(global.a === undefined)
console.log(global.b === undefined)