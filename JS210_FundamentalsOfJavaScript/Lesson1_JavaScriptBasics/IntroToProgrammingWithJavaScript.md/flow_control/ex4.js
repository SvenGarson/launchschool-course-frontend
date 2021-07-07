/*
    What does the following code log to the output?
    
      line 1: Product2
      line 2: Product3
      line 3: Product not found!

    Why?

      The second case matches the 'serial' argument so that case
      is the first one executed.
      Subsequently, all cases following the second case are also
      executed because they do not 'break' from that particular
      case so the control-flow just falls trough down to and
      including the default case.
*/

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');