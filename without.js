const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function (arr1, arr2) {
  let newArr = [];
  for (let elem of arr1) {
    if (!arr2.includes(elem)) {
      newArr.push(elem)
    }
  }
  return newArr
}


assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);