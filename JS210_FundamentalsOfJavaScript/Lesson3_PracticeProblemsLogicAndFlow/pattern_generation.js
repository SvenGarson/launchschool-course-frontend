/*
    input
      > nStars
          - integer
          - range [2; 9]

    output
      - square of numbers with nStars lines
        and nStars columns
      - for every line index through lindex starting at 1:
          - log numbers in columns in range [1; lindex]
          - log asterisks in columns in range [lindex + 1; nStars]
          - number of starts = nStars - lindex

    other requirements
      - write a function named 'generatePattern'

    testing my algorithm
      
      nStars = 7
  
      line 1 with lindex = 1
        - numerics range [1; lindex] ==> [1; 1]
        - stars range    [lindex + 1; nStars] ==> [2; 7]
        - stars = nStars - lindex ==> 7 - 1 = 6
        - result: '1******'

      line 6 with lindex = 6
        - numerics range [1; lindex] ==> [1; 6]
        - stars range    [lindex + 1; nStars] ==> [7; 7]
        - stars = nStars - lindex ==> 7 - 6 = 1
        - result: '123456*'


    pseudo approach

      - for index in range [1; nStars]
          - number of leading numerics = lindex
          - number of trailing stars   = nStars - number of leading numerics
          - print 1 to number of leading numerics 
          - print number of trailing stars * stars
      # use a buffer string or array for each line
*/

function nTimes(numberOfIterations, callback, startingIndex = 0) {
  for (let index = startingIndex; index < (startingIndex + numberOfIterations); index += 1) {
    callback(index);
  }
}

function generatePattern(nStars) {
  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    const numberOfLeadingNumerics = lineNumber;
    const numberOfTrailingStars = nStars - numberOfLeadingNumerics;

    line = '';

    nTimes(numberOfLeadingNumerics, index => line += String(index), 1);
    nTimes(numberOfTrailingStars, index => line += '*', 1);

    console.log(line);
  }
}


console.log('\nSolution to original problem [1]');
generatePattern(7);

console.log('\nSolution to original problem [2]');
generatePattern(9);

console.log('\nSolution to original problem [3]');
generatePattern(15);

console.log('\nSolution to original problem [4]');
generatePattern(43);

console.log('\nSolution to original problem [4]');
generatePattern(110);


/*
    Further exploration

    # What the problem is

      If nStars goes beyond 9, the numbers logged to the console
      take up more than a single character, which means that the
      calculations for the number of digits and stars breaks and 
      the multi-digit numbers make the lines longer than they are
      allowed to, showing a slope.

    # New requirements

      The example shows that numbers greater than 9 are shown in
      the correct with all their digits.

    # A solution

      We can account for the length of the number by padding the
      lines 1 up to and including 9, if, and only if nStars is larger
      than 9.

      Additionaly, if the numbers printed per line are longer than
      two characters, the problem compounds. This happens for every
      different length of number and based on the line that is
      printed, a different number of padding must be used to account
      for the problem.

    # Visual example to figure out the weights

        when nStars  = 12
        over 9?      = yes
        base padding = '12'.length
        base padding = 2

        # need to determine how much to decrement the base padding
          by based on the printed line

        123456789xxxxxx  

        123456789101112

        # Manual example with previous inputs
        1******** ** ** **       // rule? Simply base padding on index.length
        12******* ** ** **
        123****** ** ** **
        1234***** ** ** **
        12345**** ** ** **
        123456*** ** ** **
        1234567** ** ** **
        12345678* ** ** **
        123456789 ** ** **
        123456789 10 ** **
        123456789 10 11 **
        123456789 10 11 12

        # The simplest solution

          For a given line given the line number starting at 1:
            - print numbers as usual whatever their length
            - print asterisk as many times per character as the 
              index number has digits
*/

function generatePatternFurtherExploration(nStars) {
  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    const numberOfLeadingNumerics = lineNumber;
    const numberOfTrailingStars = nStars - numberOfLeadingNumerics;

    line = '';

    nTimes(numberOfLeadingNumerics, index => line += String(index), 1);

    // asterisk is based on the number of digits in the index
    nTimes(numberOfTrailingStars, function (index) {
      let padding = '';
      nTimes(String(index).length, _ => padding += '*');

      line += padding;
    }, numberOfLeadingNumerics + 1);

    console.log(line);
  }
}


console.log('\nSolution to further exploration [1]');
generatePatternFurtherExploration(7);

console.log('\nSolution to further exploration [2]');
generatePatternFurtherExploration(9);

console.log('\nSolution to further exploration [3]');
generatePatternFurtherExploration(15);

console.log('\nSolution to further exploration [4]');
generatePatternFurtherExploration(43);

console.log('\nSolution to further exploration [4]');
generatePatternFurtherExploration(110);