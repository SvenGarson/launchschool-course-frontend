let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

/*

    The above code snipper logs:

        The total value is 15

    Because the function is hoisted but the local variables are
    not because they are declared using 'let', so their declaration
    and definition always follows the function after hoisting.

    My corrected answer after running the example:

        I did not think of the fact that a function definition
        implicitly creates a local variable with the function
        name as identifier.

        So the function is hoisted and creates a function scope
        variable with the function name, which is why that identifier
        'counter' cannot be used for a new block variable in that 
        same scope.

        An error is raised that the identifier 'counter' has already
        been declared.
*/