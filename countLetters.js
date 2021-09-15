const assertEqual = function(actual, expected) {
 
  (actual === expected) ? console.log(`✅✅✅ Assertion Passed:   ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  
};

const countLetters = function(aSentence){
  const letterCount = {}
  for (const letter of aSentence){
      letterCount[letter] ? letterCount[letter] += 1: letterCount[letter] = 1
  }
  return letterCount

}

