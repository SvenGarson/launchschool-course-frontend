var logValue = 'foo';

function logValue() {
  console.log('Hello, world!');
}

console.log(typeof logValue);

/*

    The code after hoisting:

      function logValue() {
        console.log('Hello, world!');
      }

      var logValue = 'foo';

      console.log(typeof logValue);

    
    What does the code above print to the output?

      line 1: string  
      
    Explanation

      We can assume that functions are hoisted before
      variables are hoisted, which in this case means
      that the global variable 'logValue' shadows the
      previous declaration of the global function
      'logValue', hence the object type of the
      'logValue' variable is 'string'.

*/