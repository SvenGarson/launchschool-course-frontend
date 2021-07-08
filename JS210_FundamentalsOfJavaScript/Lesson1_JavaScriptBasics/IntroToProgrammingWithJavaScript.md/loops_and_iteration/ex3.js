/*
    Why does the following code cause an infinite loop?

      The program causes an infinite loop because of the
      assignment in the while loop condition.

      In JS, an assignment always evaluates to the value or
      the right side of the assignment, which is the Number
      1 in this case.

      In this conditional context, the Number 1 is truthy and
      so the while loop passes the condition and executes the
      loop.

      The fact that the while loop body increments the counter
      variable has no overall effect because the assignment in
      the while condition always assigns the counter variable 
      to the Number one after the loop is executed.

      Because of this, the counter variables is always 1 when
      the loop executes and thus is always incremented to the
      number 2 before the conditional that could break from the
      loop.
*/

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}