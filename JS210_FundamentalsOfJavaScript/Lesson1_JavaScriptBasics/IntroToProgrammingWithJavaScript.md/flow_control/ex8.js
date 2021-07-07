function numberRange(number) {
  // oth range = (-inf...0)
  // 1st range = (0..50)
  // 2nd range = (51..100)
  // 3rd range = (101...+inf)

  // catch num < zero
    // we know num >= 1
    // catch <= 50
      // we know num >= 51
      // catch num <= 100
        // we know num >= 101
        // catch num for being <= 101

  if (number < 0)
    console.log(`${number} is less than 0`);
  else if (number <= 50)
    console.log(`${number} is between 0 and 50`);
  else if (number <= 101)
    console.log(`${number} is between 51 and 100`);
  else
    console.log(`${number} is greater than 100`);
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);