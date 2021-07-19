var myVar = 'This is global';

function someFunction() {
  console.log(myVar);
}

someFunction();

/*

    What does the code above print to the output?

      line 1: This is global
      
    Explanation

      Line 1 declares a variable with the identifier 'myVar'
      with local/function scope and ends up being global scope
      which means that it is accessible in the 'someFunction'
      function.

      When the 'someFunction' function is invoked, it merely prints
      out the value of the global variable, which is 'This is global'
      because it is never re-assigned to another value since it's
      initialization.

      When the variable 'myVar' is referenced on line 4, JS does
      the following to resolve it:

          1. Check the current scope, in this case the 'someFunction'
             scope for the variable.
          2. If it is not found in the current scope, as is the case
             for this exercise, JS checks the outer scope up to the
             global scope, which in this case is the next step.

      Here JS finds the definition for the 'myVar' variable and
      prints it's value.

*/