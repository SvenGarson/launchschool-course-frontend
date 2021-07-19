var myVar = 'This is global';

function someFunction() {
  myVar = 'This is local';
}

someFunction();
console.log(myVar);

/*

    What does the code above print to the output?

      line 1: This is local
      
    Explanation

      The variable declared on line 1 has local/function scope
      since it is declared using the 'var' keyword and adds a
      'myVar' property on the global/window object for the same
      reason.

      When the 'someFunction' is invoked, the assignment on line 4
      is merely re-assignment to the global variable 'myVar' since
      that global variable is in scope in the 'someFunction' which
      ends up re-assigning the global variable to the string
      'This is local' which is what is printed for line 8.

*/