function paddedNumberString(number, desiredNumberOfDigits = 2) {
  const numberString = String(number);
  const numberOfDigits = numberString.length;

  let result;

  if (numberOfDigits >= desiredNumberOfDigits) {
    result = numberString;
  } else {
    const zeroPaddingLength = desiredNumberOfDigits - numberOfDigits;
    result = (new Array(zeroPaddingLength + 1)).join('0') + numberString;
  }

  return result;
}

function formatTime(date) {
  const paddedHours = paddedNumberString(date.getHours());
  const paddedMinutes = paddedNumberString(date.getMinutes());

  return paddedHours + ':' + paddedMinutes;
}

console.log(formatTime(new Date(2021, 2, 24, 12, 45)));
console.log(formatTime(new Date(2021, 2, 24, 5, 45)));
console.log(formatTime(new Date(2021, 2, 24, 12, 8)));
console.log(formatTime(new Date(2021, 2, 24, 3, 4)));