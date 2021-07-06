/*
    I expect the following program to successfully declare the
    variable 'foo' on both lines, but with the difference that:
        - the first instance of 'foo' is in scope outside the block
        - the second instance of 'foo' is in scope inside only
          inside of the block

    This has the overall effect that the same identifier 'foo' is
    bound to different values depending on the scope it is accessed
    from, which for the console.log portion is the scope outside the
    block, so the console.log prints the value 'bar'

    This is a typical case of variable shadowing.
*/

let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);