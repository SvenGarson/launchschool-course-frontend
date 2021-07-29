function getGrade(grade1, grade2, grade3) {
  const averageGrade = (grade1 + grade2 + grade3) / 3.0;
  let averageLetterGrade;

  if (averageGrade >= 90 && averageGrade <= 100) {
    averageLetterGrade = 'A';
  } else if (averageGrade >= 80) {
    averageLetterGrade = 'B';
  } else if (averageGrade >= 70) {
    averageLetterGrade = 'C';
  } else if (averageGrade >= 60) {
    averageLetterGrade = 'D';
  } else {
    averageLetterGrade = 'F';
  }

  return averageLetterGrade;
}

console.log(getGrade(95, 90, 93) === "A");
console.log(getGrade(50, 50, 95) === "D");