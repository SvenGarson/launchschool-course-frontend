function dateSuffix(date) {
  const dayOfMonth = date.getDate();

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

  return resultingDateSuffix;
}

let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let dateToday = new Date();
let nameOfWeekday = daysOfWeek[dateToday.getDay()];
let dayOfMonth = dateToday.getDate();
let message = `Today's date is ${nameOfWeekday}, the ${dayOfMonth}${dateSuffix(dateToday)}`;
console.log(message);
