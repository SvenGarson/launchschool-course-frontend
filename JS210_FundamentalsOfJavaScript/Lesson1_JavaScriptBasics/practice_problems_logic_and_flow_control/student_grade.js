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

      # get all three scores
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

*/

