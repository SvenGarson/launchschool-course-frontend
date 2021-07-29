function characterTimes(character, times) {
  return Array(times + 1).join(character);
}

function longestStringLength(strings) {
  const reduceToLongestLineLength = function (longestLengthYet, string) {
    const stringLength = string.length;
    return (stringLength > longestLengthYet) ? stringLength : longestLengthYet;
  };

  return strings.reduce(reduceToLongestLineLength, 0);
}

function paddStringsToLength(strings, desiredLength) {
  // this function assumes that all strings are <= desiredLength

  const paddStringToLength = function(unpaddedString) {
    const paddingLength = desiredLength - unpaddedString.length;
    const paddingToAppend = Array(paddingLength + 1).join(' ');
    return unpaddedString + paddingToAppend;
  };

  return strings.map(paddStringToLength);
}

function logInBox(text) {
  const textLines = text.split('\n')
  const longestLineLength = longestStringLength(textLines);
  const paddedLines = paddStringsToLength(textLines, longestLineLength);

  const contentWidthWithPadding = longestLineLength + 2;
  const horizontalDividerLine = `+${characterTimes('-', contentWidthWithPadding)}+`;
  const verticalPaddingLine = `|${characterTimes(' ', contentWidthWithPadding)}|`;

  // output the banner
  console.log(horizontalDividerLine);
  console.log(verticalPaddingLine);
  for (const currentPaddedLine of paddedLines) {
    console.log(`| ${currentPaddedLine} |`);
  }
  console.log(verticalPaddingLine);
  console.log(horizontalDividerLine);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('Ene mene muh.\nUnd raus\nbist du!');
logInBox('Choose your weapon dear sir:\n  [1] Sword\n  [2] Dagger\n  [3] Spells');