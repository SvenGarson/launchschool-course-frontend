function debugIt() {
  const status = 'debugging';
  function logger() {
    console.log(status);
  }

  logger();
}

debugIt();

/*

    Why does the code above print 'debuggin'?

      

*/