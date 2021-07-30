let a = 'hello';

for (let index = 0; index < 5; index += 1) {
  let a = index;
}

console.log(a);

/*

    # Explain what the program outputs

        line 1: hello

    # Explain how the relevant parts of the program work

      On line 1 we declare a variable with local scope that ends up
      being global but not added to the global/window object.

      Every execution of the for loop executes it's own local 'a'
      variable with block scope, which shadows the global 'a'
      variable. This means that the global 'a' variable is never
      re-assigned in the loop.
*/

// tests to check my assumptions
console.log('\n\nTesting my assumptions: ');
console.log(a === 'hello');
console.log(global.a === undefined);