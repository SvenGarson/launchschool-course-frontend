/*
    Requirements:
      - Have a user input a password
      - is the user enter the pw wrong 3 times, log the message
          'You have been denied access.'
        and terminate the program
      - if the password is correct, log the message
          'You have successfully logged in.'
        and also terminate the program
      - ask the password and question as follows
          'What is the password: '

    Approach

      // default message is optimistic
      message = 'Success'
      attempts = 0
        
      forever
        get input

        // break from loop and be optimistic
        if input.correct
          break 
        
        // note: here we know the answer is wrong
        attempts += 1

        // break with different message on failure
        if (attempts >= 3) {
          message = 'failure'
          break
        }

*/

const LOGIN_PASSWORD_QUESTION = 'What is the password: ';
const LOGIN_SUCCESS_MESSAGE = 'You have successfully logged in.';
const LOGIN_FAILURE_MESSAGE = 'You have been denied access.';
const CORRECT_PASSWORD = 'password';
const RLSYNC = require('readline-sync');

function guessPassword() {
  let feedbackMessage = LOGIN_SUCCESS_MESSAGE;
  let loginAttempts = 0;

  while (true) {
    const guess = RLSYNC.question(LOGIN_PASSWORD_QUESTION);

    if (guess === CORRECT_PASSWORD) break;

    // note: we know the password is invalid at this point
    loginAttempts += 1;

    if (loginAttempts >= 3) {
      feedbackMessage = LOGIN_FAILURE_MESSAGE;
      break;
    }
  }

  console.log(feedbackMessage);
}

guessPassword();