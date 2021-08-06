function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    let a = 'hello again';
  }
}

hello();
console.log(a);


/*

    # Explain what the program outputs

        line 1: hello
        line 2: hello

    # Explain how the relevant parts of the program work

      This code looks the exact same after hoisting and since
      no variable declaration happens before the variable
      re-assignment on line 2, the 'a' variable becomes a global
      variable with the value 'hello'.

      Line 3 then outputs the value of the global 'a' variable, which
      is 'hello', and since the conditional on line 5 is never
      executed, the global keeps it's initial value for the rest of
      the program.

      On line 11 the program outputs the global variable 'a' value
      again, which is still 'hello'.


    # Comments

      - This code stays the same after hoisting
*/