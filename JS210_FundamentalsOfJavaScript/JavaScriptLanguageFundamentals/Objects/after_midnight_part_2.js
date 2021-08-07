const MINUTES_PER_MILLISECONDS = 1 / 60000;

function millisecondsToMinutes(milliseconds) {
  return milliseconds * MINUTES_PER_MILLISECONDS;
}

function deltaDateTimeInMilliseconds(date1, date2) {
  return Math.abs(date1.getTime() - date2.getTime());
}

function dateIsMidnight(date) {
  return (date.getHours() === 0) && (date.getMinutes() === 0);
}

function deltaTimeInDirection(clockTime, direction) {
  const partialBaseDate = '01 Jan 2021';
  const midnight = new Date(`${partialBaseDate} 00:00`);
  const nextDay = new Date(`${partialBaseDate} ${clockTime}`);

  /*
      If the given clock time string is NOT midnight and the direction is
      negative, use yesterday set to the given clock time as the day to
      calcaluate delta time from, otherwise use today.
  */

  if (!dateIsMidnight(nextDay) && direction < 0) {
    nextDay.setDate(nextDay.getDate() - 1);
  }

  const deltaTimeInMilliseconds = deltaDateTimeInMilliseconds(midnight, nextDay);
  const deltaTimeInSeconds = millisecondsToMinutes(deltaTimeInMilliseconds);

  return deltaTimeInSeconds;
}

function afterMidnight(timeStr) {
  return deltaTimeInDirection(timeStr, 1);
}

function beforeMidnight(timeStr) {
  return deltaTimeInDirection(timeStr, -1);
}

console.log(afterMidnight('00:00') === 0);
console.log(beforeMidnight('00:00') === 0);
console.log(afterMidnight('12:34') === 754);
console.log(beforeMidnight('12:34') === 686);