const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop();
  console.log(`popped ${value} from the array`);
  return value + bar + baz;
}

foo(qux);

/*

    # What side effects are present in the 'foo' function in the previous code?

      > on line 6:
        - the 'arr' argument is mutated by having the last element removed
          which affects the argument passed on function invocation on line 11,
          which points to the same memory location as the global variable
          'qux' declared on line 2.

      > on line 7:
        - the program outputs text to the standard output, where the standard
          output may point to the command line or other entities.

*/