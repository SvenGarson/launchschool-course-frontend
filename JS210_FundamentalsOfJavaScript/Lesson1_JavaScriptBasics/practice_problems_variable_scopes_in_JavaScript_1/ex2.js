let a = 'outer';

function testScope() {
  a = 'inner';
  console.log(a);
}

console.log(a);
testScope();
console.log(a);

/*
    Predict what the following code outputs:

      line 1: outer
      line 2: inner
      line 3: inner

    Explain how it works:

      8)  outputs the global variable 'a' with value 'outer'
      9)  invokes the global 'testScope' method which re-assigns
          the global 'a' variable to the value 'inner' and outputs
          that global variable 'a' which is inner
      10) outputs the same as line 8 with the difference that the
          global 'a' variable now has the string 'inner' as value
          because the function re-assigned that global variable to
          another value i.e. outputs inner to the output
      
*/