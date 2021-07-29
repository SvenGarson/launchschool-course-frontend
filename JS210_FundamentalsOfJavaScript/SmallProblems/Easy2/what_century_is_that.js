const EXCEPTIONAL_NUMBERS = [11, 12, 13];

function centuryForYear(year) {
  return Math.ceil(year / 100);
}

function numberOrdinal(number) {
  const onesDigitToOrdinal = {
    1: 'st',
    2: 'nd',
    3: 'rd'
  };

  const numberOnesPlace = number % 100;
  const numberOrdinal = onesDigitToOrdinal[String(numberOnesPlace)];

  if (!numberOrdinal || EXCEPTIONAL_NUMBERS.includes(numberOnesPlace)) {
    return 'th';
  } else {
    return numberOrdinal;
  }
}

function century(year) {
  const yearCentury = centuryForYear(year);
  const yearCenturyOrdinal = numberOrdinal(yearCentury);
  return String(yearCentury) + yearCenturyOrdinal;
}

console.log(century(2000) === "20th");
console.log(century(2001) === "21st");
console.log(century(1965) === "20th");
console.log(century(256) === "3rd");
console.log(century(5) === "1st");
console.log(century(10103) === "102nd");
console.log(century(1052) === "11th");
console.log(century(1127) === "12th");
console.log(century(11201) === "113th");