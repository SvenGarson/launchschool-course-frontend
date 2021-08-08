var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}

/*

    After hoisting

      function counter(count) {
        // ...
      }

      var rate;

      counter = 5;
      rate = 3;
      console.log('The total value is ' + String(counter * rate));



    The above code snipper logs:

      The total value is 15

    Because functions are hoisted first, and the 'counter'
    variable overrides the function.  

*/