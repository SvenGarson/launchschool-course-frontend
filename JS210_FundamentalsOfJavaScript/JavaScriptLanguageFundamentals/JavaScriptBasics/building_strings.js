/*
    What does the following code snippet output?

      Initially I though that it would output the text without problems
      with the following more or less desired side effects based on
      using a backward slack to keep the line going:

        - the spaces before the slashed are output
        - the leading space on the start of every line is also interpreted
          as part of the string
        - the string is output as one continuous string, no newlines are
          inserted

      But pasting the code into the editor revealed that one slash is followed
      by spaces which means that the slash is not the last character and thus
      causes the interpreter to throw an exception or some other error.

    Is it what you expected?

      Yes, but only because the editor releaved the spaces in the context
      of JavaScript.

    Are there any bugs or errors?

      But pasting the code into the editor revealed that one slash is followed
      by spaces which means that the slash is not the last character and thus
      causes the interpreter to throw an exception or some other error.
*/

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);