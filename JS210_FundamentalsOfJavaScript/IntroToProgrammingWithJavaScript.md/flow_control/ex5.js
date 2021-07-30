// refactor the following statement to use an if statement instead
return foo() ? 'bar' : qux();

// define the functions to run the code
function foo() { return; }
function qux() { return; }

// the solution
if (foo())
  return 'bar'
else
  return qux();

