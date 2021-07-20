let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

/*

    What does the code above print to the output?

      line 1: 7
      
    Explanation

      The output is 7 again because the global variable 'a' is not
      re-assigned for the following reason.

      When the 'myValue' function is invoked, the function definition
      makes a new local/function scope variable available that
      represents the argument passed to the function. In this case
      the identifier 'a' matches the identifier of the global
      variable identifier 'a' and subsequently shadows the global
      variable.

      All that happens while the 'myValue' function is executed, is
      that this local/function scope variable is incremented by ten.

*/