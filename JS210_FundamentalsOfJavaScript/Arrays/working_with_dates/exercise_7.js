function dateSuffix(dayOfMonth) {
  let resultingDateSuffix;

  if ([11, 12, 13].includes(dayOfMonth)) {
    resultingDateSuffix = 'th';
  } else {
    // based on last digit
    const dayOfMonthLastDigit = dayOfMonth % 10;

    const lastDigitSuffix = {
      1: 'st',
      2: 'nd',
      3: 'rd'
    };


    const dateHasSpecialSuffix = lastDigitSuffix.hasOwnProperty(String(dayOfMonthLastDigit));
    resultingDateSuffix = dateHasSpecialSuffix ? lastDigitSuffix[dayOfMonthLastDigit] : 'th';
  }

  return String(dayOfMonth) + resultingDateSuffix;
}

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let today = new Date();

console.log("Today's date is " + daysOfWeek[today.getDay()] + ', ' +
                                 months[today.getMonth()] + ' ' +
                                 dateSuffix(today.getDate()));
