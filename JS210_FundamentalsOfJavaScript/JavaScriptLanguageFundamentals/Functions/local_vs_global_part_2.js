var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
  console.log(myVar);
}

someFunction();

/*

    What does the code above print to the output?

      line 1: This is local
      
    Explanation:

      The variables have the same exact scope as in the previous
      exercise and the hoisting, again, does make a difference in
      explaining how the code works.

      This time though the console.log invokation outputs the 'myVar'
      variable that has function scope. While the global 'myVar' is
      technically accessible inside the 'someFunction' function, the
      'myVar' declaration on line number 4 shadows the global 'myVar'
      variable.

      So the string printed is the one 'myVar' on line number 4 is
      initialized to.

*/