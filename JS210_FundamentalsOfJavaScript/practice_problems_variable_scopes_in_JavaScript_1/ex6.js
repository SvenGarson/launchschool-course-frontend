console.log(a);

var a = 1;

/*

    Explain what the program outputs:

      line 1: undefined


    Explain how the relevant parts of the program work:

      At global scope 'var' add the 'a' property to teĥe
      global or window object.

      Because of of hoisting, the 'a' variable is initialized
      with the value 'undefined' up to and excluding where the
      variable is defined/initialized.

      Since the console.log accesses the 'a' variable before it
      is re-assigned to another value, the output it 'undefined'

*/