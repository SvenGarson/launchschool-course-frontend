function say() {
  if (false) {
    let a = 'hello from inside a block';
  }

  console.log(a);
}

say();


/*

    Explain what the program outputs:

      ReferenceError is raised

    Explain how the relevant parts of the program work:

      2) specifiy a conditional that will never execute
      3) since the containing conditional never executes,
         and the variable 'a' is not declared with the 'var'
         keyword, the variable 'a' is not defined.
      6) raises a ReferenceError because the identifier 'a'
         is not defined


    Comments

      Even if the conditional did execute, the 'a' variable
      would be local and block level scope, so it would never
      be accessible outside the conditional block
*/