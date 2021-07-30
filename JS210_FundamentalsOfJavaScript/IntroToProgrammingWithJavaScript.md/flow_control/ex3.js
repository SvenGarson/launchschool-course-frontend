function evenOrOdd(number) {
  if (!Number.isInteger(number))
    throw(`The number ${number} is not an integer!`);
  message = ((number % 2) === 1) ? 'odd' : 'even';
  console.log(message);
}

evenOrOdd(1);   // odd
evenOrOdd(2);   // even
evenOrOdd(3);   // odd
evenOrOdd('5'); // not an integer
