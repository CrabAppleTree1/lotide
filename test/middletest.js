const assertArraysEqual = require('../assertArraysEqual')
const eqArrays = require("../eqArrays");
const middle = require('../middle')


// console.log(middle([2,4,5,1,3]))
assertArraysEqual(eqArrays(middle([1, 2, 3]), [2]), true); // => should PASS
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
assertArraysEqual(eqArrays(middle([12, 13, 15, 16, 1, 2, 3, 5, 6, 7, 9]), [2]), true)