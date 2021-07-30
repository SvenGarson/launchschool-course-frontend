function centuryForYear(year) {
  return Math.ceil(year / 100);
}

function singleDigitToOrdinal(digit) {
  // this function asscumes that the digit is a single digit
  const singleDigitOrdinalMap = {
    1: 'st',
    2: 'nd',
    3: 'rd'
  };

  const digitAsString = String(digit);
  const digitOrdinal = singleDigitOrdinalMap[digitAsString];

  return digitOrdinal ? digitOrdinal : 'th';
}

function numberOrdinal(number) {
  const relevantOrdinalDigits = number % 100;
  const exceptionalNumbers = [11, 12, 13];

  let ordinal;

  if (exceptionalNumbers.includes(relevantOrdinalDigits)) {
    ordinal = 'th';
  } else {
    const lastNumberDigit = relevantOrdinalDigits % 10;
    ordinal = singleDigitToOrdinal(lastNumberDigit);
  }

  return ordinal;
}

function century(year) {
  const yearCentury = centuryForYear(year);
  const centuryOrdinal = numberOrdinal(yearCentury)
  return `${yearCentury}${centuryOrdinal}`;
}

console.log(century(2000) === "20th")
console.log(century(2001) === "21st")
console.log(century(1965) === "20th")
console.log(century(256) === "3rd")
console.log(century(5) === "1st")
console.log(century(10103) === "102nd")
console.log(century(1052) === "11th")
console.log(century(1127) === "12th")
console.log(century(11201) === "113th")