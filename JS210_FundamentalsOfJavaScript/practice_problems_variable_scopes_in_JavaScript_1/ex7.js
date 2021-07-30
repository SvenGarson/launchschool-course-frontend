console.log(a);

let a = 1;

/*

    Explain what the program outputs:


    Explain how the relevant parts of the program work:

      3) declares a local with global scope with the let keyword
         which means that no attribute is added to the global
         object

      1) attempts to output the value of the global 'a' variable
         but since the code looks the same after hoisting, JS
         throws a reference error because the global 'a' variable
         is not defined until line 3

    Elaborating after taking a glimpse of the solution

      JS knows about the local variable 'a' because it scanned all
      of them during the creation phase, but the variable 'a' is
      in the tempral dead zone until line three, which is why JS
      raises a reference error saying that the variable 'a' is not
      yet initialized.
*/