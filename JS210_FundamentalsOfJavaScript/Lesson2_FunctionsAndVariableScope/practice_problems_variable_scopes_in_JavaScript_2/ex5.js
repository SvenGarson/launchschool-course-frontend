var a = 'hello';

for (var index = 0; index < 5; index += 1) {
  var a = index;
}

console.log(a);

/*

    # After hoisting
      var a = 'hello';
      

      for (var index = 0; index < 5; index += 1) {
        a = index;
      }

      console.log(a);

    # Explain what the program outputs

        If I consider the re-assignment to be valid:

        line 1: 4

    # Explain how the relevant parts of the program work

        After doing the reserch I know that multiple variable
        declarations with the 'var' keyword are hoisted but the 
        same successive/duplicate ones are ignored in terms of
        setting them to 'undefined' but that the re-assignmen on
        line 4 works.

        So the for loop just re-assigns the variable 'a' until it
        has the value 4, which is what is printed.

    # Comments

      Initially I was sure this would raise an error because
      we declare the 'a' variable in global scope and then use
      the same identifier in block scope but this does not happen.

      But when hoisting, the 'a' variable in the for loop is
      apparently hoisted up to global scope and does not conflict
      with the other one.

      While 'let' would create a local/ block scope variable and
      shadow the local variable, this example re-assigns the global
      which I understand without the 'var' keyword but with it I
      don't understand why it does not raise the used identifier
      error.

      After doing some research the factor I did not consider was
      the following:

      When 'var' variables are hoisted, successive hoisting of the
      same variable does not re-assign any already defined variable
      with the same name, especially it does not re-assign it to the
      value 'undefined' AND the same name can be defined multiple
      times without and error!

      In short, duplicate hoisted 'var' variables are ignored but
      the re-assignmend is executed!?
    
*/