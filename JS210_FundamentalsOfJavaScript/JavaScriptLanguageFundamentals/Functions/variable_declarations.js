console.log(a);

var a = 1;

/*

    After hoisting:

    var a;
    console.log(a); // 'a' is in the temporal dead zone here
    a = 1;

    What does the code above print to the output?

      line 1: undefined
      
    Explanation

      After hoisting, the global variable 'a' is declared
      at the very top of the global scope, i.e. before the
      call to console.log. But the console.log outputs the
      value 'undefined' for the 'a' variable because that
      variable is in the Temporal Dead Zone until line 1,
      where the global variable 'a' is re-assigned or
      initialized to the Number 1.

      This code outputs the default value of a 'var'
      variable that is initialized to the value
      'undefined' when hoisted.

*/