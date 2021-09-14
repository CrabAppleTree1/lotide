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

const assertArraysEqual = function (funct, cond) {
  eqArrays(funct, cond) ? console.log('✅ Assertion Passed') : console.log('🛑    Assertion Failed:');
}

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false)
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true)
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false)