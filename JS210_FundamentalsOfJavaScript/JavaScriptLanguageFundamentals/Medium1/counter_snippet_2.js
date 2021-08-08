function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;


/*

    After hoisting the code looks like:

      function counter(count) {
        // ...
      }

      var rate;

      console.log('The total value is ' + String(counter * rate));

      counter = 5;
      rate = 3;


    The above code snipper logs:

      The total value is NaN

    Because the 'counter' and 'rate' variable are hoisted after the
    function, but not defined until after the console.log statement
    executes, both variables are in the temporal dead-zone and in this
    case, the 'counter' variable does not override the 'counter' function.


    Because of this the expression in the String() portion evaluates
    to:

        someFunction * undefined

*/