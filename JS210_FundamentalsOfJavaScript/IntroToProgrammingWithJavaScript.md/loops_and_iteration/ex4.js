/*
    Does the following code throw an error?

      No it does not throw an error.


    Why or why not?

      If it behaves like C, the all of the following for
      loop components:
        - initialization
        - condition
        - incrementation

      are optional, and since it does not contain an
      incrementation component that updates the variable 'i'.

      This is not an error. The for loop can be used as infinite
      loop this way or even completely empty like so:

        for(;;) { // infinite loop }

    What does the following code log to the output?

      line 1: 1
      line 2: 2
      line 3: 3
      line 4: 4
      line 5: 5

*/

for (let i = 0; i < 5;) {
  console.log(i += 1);
}
