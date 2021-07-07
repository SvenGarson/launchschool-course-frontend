/*
    The following code prints nothing to the comman line output
    because the return statement exits from the function before
    the console.log method is invoked.
*/

function scream(words) {
  words = words + '!!!!';
  return;
  console.log(words);
}

scream('Yipeee');