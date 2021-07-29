function characterTimes(character, times) {
  return Array(times + 1).join(character);
}

function triangle(n) {
  for (let triangleLineIndex = 1; triangleLineIndex <= n; triangleLineIndex += 1) {
    const leadingSpacing = characterTimes(' ', n - triangleLineIndex);
    const trailingStars = characterTimes('*', triangleLineIndex);

    console.log(leadingSpacing + trailingStars);
  }
}

console.log('\nRight triangle for argument: 5');
triangle(5);

console.log('\nRight triangle for argument: 9');
triangle(9);