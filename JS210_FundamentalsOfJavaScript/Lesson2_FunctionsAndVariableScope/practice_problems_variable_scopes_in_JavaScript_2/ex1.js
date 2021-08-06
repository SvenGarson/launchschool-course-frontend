function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

/*

    Explain what the program outputs:

      line 1: undefined

    Explain how the relevant parts of the program work:

      1) declare function 'say'
      3) declare local variable 'a' with keyword 'var'
         inside a conditional that will never execute.

         During the creation phase, the 'a' variable is
         declared with function scope and initialized with the
         value 'undefined' which means that the variable is
         defined function wide but not initialized to the string
         on line 3.
      6) output the value of variable 'a' which is 'undefined'

*/