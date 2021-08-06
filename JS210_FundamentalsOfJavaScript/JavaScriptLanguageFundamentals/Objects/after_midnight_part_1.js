function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

const MILLISECONDS_PER_MINUTE = 60000;

function minutesToMilliseconds(minutes) {
  return minutes * MILLISECONDS_PER_MINUTE;
}

function timeOfDay(deltaMinutes) {
  const todayMidnight = new Date();
  todayMidnight.setHours(0);
  todayMidnight.setMinutes(0);

  const deltaMinutesInMilliseconds = minutesToMilliseconds(deltaMinutes);
  const shiftedDate = new Date(todayMidnight.getTime() + deltaMinutesInMilliseconds);

  let hours = shiftedDate.getHours();
  let minutes = shiftedDate.getMinutes();

  return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
