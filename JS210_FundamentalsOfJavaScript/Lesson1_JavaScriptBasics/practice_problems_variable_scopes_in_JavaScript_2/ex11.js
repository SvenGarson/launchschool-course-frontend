let a = 'outer';

console.log(a);
setScope();
console.log(a);

var setScope = function () {
  a = 'inner';
};

/*
    # Hoisting in action
    var setScope; // undefined by default
    let a = 'outer';

    console.log(a);
    setScope();     // undefined at this point
    console.log(a);

    setScope = function () {
      a = 'inner';
    };


    # Explain what the program outputs

      

      Before noticing the problem:

        line 1: outer
        line 2: inner

      After noticing the problem:
        
        line 1: outer
        line 2: raises an error that 'setScope' is not a function

    # Explain how the relevant parts of the program work

      While the 'setScope' function is declared using the 'var'
      keyword, that variable is 'undefined' by default and not
      initialized to the function until line 7.

      This means that the 'setScope' function cannot be invoked
      until line 10 and after.

      So the program outputs the value 'outer' for the first 
      log and raises an error along the lines of 'setScope' is
      not a function.      
    
*/
