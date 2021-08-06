/*
    + Explanation of the program +
    +----------------------------+  
    
      Compute the student's grade based on the three
      scores input by the user.

      The following are the grading rules:
        - if the score avg >= 90    : the grade is 'A'
        - if the score avg [70; 90[ : the grade is 'B'
        - if the score avg [50; 70[ : the grade is 'C'
        - if the score avg < 50     : the grade is 'F'


    Input
      - positive integers i.e. range [1; +inf]
      - ask user with the following question throug 3 scores
          1. question: Enter score 1: INPUT
          2. question: Enter score 2: INPUT
          3. question: Enter score 3: INPUT

    output
      - message with the grade through GRADE
          - Based on the average of your 3 scores your letter grade is "GRADE"
       

    + Rough program logic +
    +---------------------+

      # get all three score
      score 1 = question ...
      score 2 = question ...
      score 3 = question ...
      avg = (s1 + s2 + s3) / 3

      # determine letter grade
      if avg >= 90
        grade = 'A'
      else if (avg >= 70) // note: avg < 90
        // avg range can be in: [70; 90[
      etc

      # show the result
      log the grade with the required message


    + Abstractions +
    +--------------+

      > get score for question as Integer (question)
      > the program flow

*/

const RLSYNC = require('readline-sync');

function getScoreForQuestionAsNumber(question) {
  const answer = RLSYNC.question(question);
  return Number(answer);
}

function studentLetterGradeForScores() {
  const score1 = getScoreForQuestionAsNumber('Enter score 1: ');
  const score2 = getScoreForQuestionAsNumber('Enter score 2: ');
  const score3 = getScoreForQuestionAsNumber('Enter score 3: ');
  const averageScore = (score1 + score2 + score3) / 3;

  let letterGrade;
  if (averageScore >= 90) {
    letterGrade = 'A';
  } else if (averageScore >= 70) {
    letterGrade = 'B';
  } else if (averageScore >= 50) {
    letterGrade = 'C';
  } else {
    // averageScore < 50
    letterGrade = 'F';
  }
  
  console.log(`\nBased on the average of your 3 scores your letter grade is "${letterGrade}"`)

  return false;
}

console.log('\nSolution to original problem');
studentLetterGradeForScores();

/*
    Further exploration

      - Make it so that the user can enter any number of 
        scores to average
      - Move the computation of the average into a function,
        that handles an array
      - also move the letterGrade determination into a function

    Approach

      # Have the user input any number of scores
        Ask the user to add a score to an array until an empty
        line marks the end of the number registration process

        forever
          newOne = ask user

          break if newOne.empty?

          scores << newOne

      # New requirements
        - input is still the same i.e. integer in range [1; +inf]
*/

function scoresAverage(scores) {
  let scoresSum = 0;

  for (let score of scores) {
    scoresSum += score;
  }

  return scoresSum / scores.length;
}

function letterGradeForScoreAverage(averageScore) {
  let letterGrade;
  
  if (averageScore >= 90) {
    letterGrade = 'A';
  } else if (averageScore >= 70) {
    letterGrade = 'B';
  } else if (averageScore >= 50) {
    letterGrade = 'C';
  } else {
    // averageScore < 50
    letterGrade = 'F';
  }

  return letterGrade;
}

function studentLetterGradeForScoresFurtherExploration() {
  // user can enter as many scores as desired
  const scores = [];

  while (true) {
    const newScore = getScoreForQuestionAsNumber('Enter score (press enter to stop): ');

    if (newScore === 0) break;

    scores.push(newScore);
  }

  const averageScore = scoresAverage(scores);
  const letterGrade = letterGradeForScoreAverage(averageScore);
  
  console.log(`\nBased on the average of your 3 scores your letter grade is "${letterGrade}"`)
}

console.log('\nSolution to further exploration');
studentLetterGradeForScoresFurtherExploration();