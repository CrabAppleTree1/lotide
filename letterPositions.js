const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++){
    
    results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i]
  }

  return results;
};


const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("this sentence").s, [3, 5]);