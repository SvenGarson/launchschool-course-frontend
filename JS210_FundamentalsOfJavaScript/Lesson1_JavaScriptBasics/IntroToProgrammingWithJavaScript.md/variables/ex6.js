/*
    I hope that the following program throws an error based
    on the idea that the constant 'FOO' has been declared previously
    and cannot be re-declared as that would make the constant
    mechanism pointless, since we could just re-declare a constant
    even though the constant could not be re-assigned.
*/

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);
