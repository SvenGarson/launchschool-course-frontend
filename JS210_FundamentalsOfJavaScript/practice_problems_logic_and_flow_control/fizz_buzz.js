function fizzbuzz() {
  for (let number = 1; number <= 100; number += 1) {
    const divisibleBy3 = ((number % 3) === 0);
    const divisibleBy5 = ((number % 5) === 0);

    let result = number

    if(divisibleBy3 && divisibleBy5) {
      result = 'FizzBuzz';
    } else if (divisibleBy3) {
      result = 'Fizz';
    } else if (divisibleBy5) {
      result = 'Buzz';
    }

    console.log(result);
  }
}

fizzbuzz();

/*
    Further exploration

    I am not making this more concise because my initial solution
    was pretty much exactly the demonstrated example approach for
    the further exploration and it just does not read.

    While that solution is 'smarter' in a bad way, I am not
    looking for another one of these shorter solution variants.
*/