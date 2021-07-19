var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*

    What does the code above print to the output?

      line 1: This is global
      
    Explanation:

      The 'myVar' variable on line 1 has local/function scope but
      ends up being global.

      The 'myVar' variable on line 4 also has local/function scope
      but is only accessible in the 'someFunction' function.

      Hoisting does not affect the results here because both
      variables are already at the top of their particular scope
      which means that the invokation of 'someFunction' has no
      side-effect on the output on line 8.

*/