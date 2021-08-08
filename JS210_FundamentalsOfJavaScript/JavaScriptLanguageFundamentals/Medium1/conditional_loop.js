let i = 0;
while (i < 10) {
  if (i % 3 === 0) {
    console.log(i);
  } else {
    i += 1;
  }
}

/*

    # Does the code above produce the expected result of logging each
    # multiple of 3 in the range [0; 9]?
    #
    # Why or why not?

      - The code outputs the zero on the first iteration which is not
        a multiple of 3
      - Because only the first branch executes, the global variable 'i'
        is never incremented and stays zero, so this code is an infinite
        loop and just keeps printing zero.
*/