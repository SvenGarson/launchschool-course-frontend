let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let dateToday = new Date();
let dayOfWeek = dateToday.getDay();
let dayOfMonth = dateToday.getDate();
let nameOfWeekday = daysOfWeek[dayOfWeek];
let message = `Today's date is ${nameOfWeekday}, the ${dayOfMonth}th`;
console.log(message);
