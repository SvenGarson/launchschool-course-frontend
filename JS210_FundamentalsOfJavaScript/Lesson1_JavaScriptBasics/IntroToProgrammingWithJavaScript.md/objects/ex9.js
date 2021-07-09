/*
    What does the following program log to the output?

      line 1: hi
      line 2: hello

    Why?

      - JS is pass by reference for Objects, which is why
        the argument1.a = 'h1 actually mutates the original
        object that is passed as the first argument

      - JS is pass by value for primitives, which is what the
        second argument, i.e. the string is. So the string is copied
        and assigned to a new local variable that is then re-assigned
        to another value in the function scope, which has no effect
        on the original variable. So the function call has no overall
        effect on the qux variable.
*/

let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);