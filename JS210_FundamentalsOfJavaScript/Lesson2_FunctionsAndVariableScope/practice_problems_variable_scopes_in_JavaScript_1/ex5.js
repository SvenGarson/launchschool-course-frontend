function hello() {
  let a = 'hello';
}

hello();
console.log(a);

/*

    Explain what the program outputs:

      Program raises a ReferenceError

    Explain how the relevant parts of the program work:

      5) invokes the 'hello' function which declares a local
         variable 'a' with block/function scope that goes out
         of scope once the function terminates execution
      6) attempt to output the value of some variable with
         identifier 'a' but this variable is not defined.

         JS raises an error.

*/