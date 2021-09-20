const assertEqual = function(actual, expected) {
 
  (actual === expected) ? console.log(`✅✅✅ Assertion Passed:   ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  
};

const tail = function(anArray) {

  let returnArray = anArray.shift();
  return returnArray;

};
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!