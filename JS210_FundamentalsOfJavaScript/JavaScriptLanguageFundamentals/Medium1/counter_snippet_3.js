var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

/*

    After hoisting the code looks like:

        function counter(count) {
          // ...
        }

        var rate;

        counter = 5;
        rate = 3;

        console.log('The total value is ' + String(counter * rate));        

    The above code snipper logs:

        The total value is 15

    Because the variables are hoisted after the function and
    also defined before the variables are used so the 'counter'
    variable definition overrides the function.


*/