function allMatches(strings, pattern) {
  // strings = array of strings
  // pattern = pattern to use
  // return array of strings in the input that match the patterns 
  return strings.filter(string => pattern.test(string));
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']