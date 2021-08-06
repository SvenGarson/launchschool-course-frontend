let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let today = new Date();
let dayToday = daysOfWeek[today.getDay()];
console.log(`Today is ${dayToday}`);