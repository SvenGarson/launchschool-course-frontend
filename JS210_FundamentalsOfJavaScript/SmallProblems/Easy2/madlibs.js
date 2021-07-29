const RLSYNC = require('readline-sync');
const MARKER_NOUN = 'NOUN';
const MARKER_VERB = 'VERB';
const MARKER_ADJECTIVE = 'ADJECTIVE';
const MARKER_ADVERB = 'ADVERB';
const MADLIBS_TEMPLATE = `Do you ${MARKER_VERB} your ${MARKER_ADJECTIVE} ${MARKER_NOUN} ${MARKER_ADVERB}? That's hilarious!`

function askForWord(message) {
  return RLSYNC.question(message);
}

function madlibsResult(markerAnswerPairs) {
  let madlibsResult = MADLIBS_TEMPLATE;

  for (const marker in markerAnswerPairs) {
    const answer = markerAnswerPairs[marker];
    const markerPattern = new RegExp(`\\b${marker}\\b`, 'g');
    madlibsResult = madlibsResult.replaceAll(markerPattern, answer);
  }

  return madlibsResult;
}

const markerAnswerPairs = {};
markerAnswerPairs[MARKER_NOUN] = askForWord('Enter a noun: ');
markerAnswerPairs[MARKER_VERB] = askForWord('Enter a verb: ');
markerAnswerPairs[MARKER_ADJECTIVE] = askForWord('Enter an adjective: ');
markerAnswerPairs[MARKER_ADVERB] = askForWord('Enter an adverb: ');

const result = madlibsResult(markerAnswerPairs);
console.log(`\n${result}`);