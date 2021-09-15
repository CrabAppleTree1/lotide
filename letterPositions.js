const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++){
    
    results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i]
  }

  return results;
};


const eqArrays = function (a1, a2) {
  condition = true
  for (let i = 0; i < a1.length; i++) {

    if (a1[i] !== a2[i]) {
      condition = false
      break;
    }
  }
  return condition
};


const assertArraysEqual = function (funct, cond) {
  eqArrays(funct, cond) ? console.log('✅ Assertion Passed') : console.log('🛑    Assertion Failed:');
};


assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("this sentence").s, [3, 5]);