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

function formattedMonth(monthIndex) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[monthIndex];
}

function formattedDay(dayIndex) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[dayIndex];
}

function formattedDate(date) {
  const weekday = formattedDay(date.getDay());
  const month = formattedMonth(date.getMonth());
  const suffixedDate = dateSuffix(date.getDate());
  return `Today's date is ${weekday}, ${month} ${suffixedDate}`;
}

const today = new Date();
let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
console.log(formattedDate(today));
console.log(formattedDate(tomorrow));