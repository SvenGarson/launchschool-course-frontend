function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

/*
    After hoisting

    function hello() {
      var a;
      a = 'hello';
      console.log(a);

      if (false) {
        a = 'hello again';
      }
    }

    hello();
    console.log(a);
*/

/*

    Explain what the program outputs:

      line 1: hello
      line 2: hello

    Explain how the relevant parts of the program work:

      The hello function is invoked on line 10, which declareds a
      variable without 'var'; 'const' and 'const' which ends up
      adding a global varaible with identifier 'a' and value 'hello'.

      Line 3 then outputs the value of the global 'a' variable.

      While the conditional on line 5 never executes, the 'a'
      variable is the also declared a function scope variable but
      never assigned to another value inside the function.

      I think that overall, the global variable 'a' then keeps the
      value of 'hello' after the function has finished execution.


    After missing getting this exercise wrong

      I wrote down the version after hoisting correctly but did not
      realize that the hoisted 'a' variable 'var a;' line kept the
      variable from becoming a global variable.

      So what really happens here is that, after hoisting, the 'a'
      variable is a local/function scope variable and is re-assigned
      on line 18 and because of that, no global variable is defined

      So the output is:

        line 1: hello
        line 2: ReferenceError is raised because the global variable
                'a' is not defined

*/