/*
    What does the following code log to the console?

    single output line: 1

    Does executing the 'foo' function affect the output?
    Why or why not?

    No, the 'foo' function does not affect the output.
    While the 'foo' function is invoked, it does not print
    anything to the output itself. So the only code affecting
    the output is the last line.

    In terms of the variable 'bar', the 'foo' method does not affect
    the value because the function declares another variable which
    merely has the same identifier than the variable outside
    the function but points to a different point in memory.

    This is a good explanation for now.
*/

let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);