const today = new Date();
let nextWeek = new Date(today.getTime());
console.log(today === nextWeek);
console.log(today.getTime() === nextWeek.getTime());
