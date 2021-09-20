const assertEqual = function (actual, expected) {

  (actual === expected) ? console.log(`✅Assertion Passed:   ${actual} === ${expected}`) : console.log(`🛑    Assertion Failed: ${actual} !== ${expected}`);

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
}


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)





