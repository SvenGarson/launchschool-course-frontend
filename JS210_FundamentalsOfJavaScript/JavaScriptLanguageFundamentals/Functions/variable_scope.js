function someFunction() {
  myVar = 'This is global';
}

someFunction();
console.log(myVar);
console.log(global.myVar);

/*

    What does the code above print to the output?

      line 1: This is global
      
    Explanation

      The 'someFunction' is the first code that runs.
      This function assigns the string primitive 'This is global'
      to the local variable 'myVar', but there is no such local
      variable with that identifier in the current scope, so JS
      checks the outer scope which in this case is also the global
      scope.

      The global scope, also, does not contain the variable 'myVar'
      in it's scope. This means that there is nowhere else to check
      for the variable as well as JS creates a new global variable
      with the identifier 'myVar' as a consequence.

      The console.log on line 6 outputs the value of the global
      'myVar' variable, which is 'This is global'.

*/