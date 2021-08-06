console.log(a);

function hello() {
  a = 1;
}

/*

    Explain what the program outputs:
  
      JS raises ReferenceError that the variable 'a' is not defined    

    Explain how the relevant parts of the program work:


      In short   : Since we never invoke the 'hello' function 
                   the re-assignment is irrelevant in this case.

      Long answer: Since the 'a' variable is not declared using 'var'
                   and the 'hello' function is never executed, the
                   'a' variable is not defined in the global scope.

                   When the program attempts to output the value of
                   variable 'a' on line number 1, JS raises a
                   ReferenceError and has no idea about a variable
                   'a' at the global scope.
*/