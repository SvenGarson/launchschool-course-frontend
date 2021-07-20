logValue();

function logValue() {
  console.log('Hello, world!');
}

/*

    The code after hoisting:

      function logValue() {
        console.log('Hello, world!');
      }

      logValue();

    What does the code above print to the output?

      line 1: Hello, world!
      
    Explanation

      After hoisting, the 'logValue' function is hoisted
      up to the top of the global scope while the function
      invocation is not. This means that the function is
      actually declared and defined at the point of
      invocation.

      The function then outputs the string 'Hello, world!'

*/