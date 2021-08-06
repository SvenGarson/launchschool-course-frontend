function hello() {
  a = 'hi';
}

hello();
console.log(a);

/*

    Explain what the program outputs:

      line 1: hi

    Explain how the relevant parts of the program work:

      5) The 'hello' function is invoked which re-assigns the
         variable 'a' to the string 'hi'. Since this 'a' variable
         is not defined, JS looks up to and including the global
         scope to find it in order to re-assign it but does not
         exist.

         A new global variable named 'a' is defined as a consequence.

      6) The value 'hi' of the gloval variable 'a' is output.

*/