/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.

*/
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const test = map(words, word => word[0])

const eqArrays = require('../eqArrays');

const assertArraysEqual = function (funct, cond) {
  eqArrays(funct, cond) ? console.log('✅ Assertion Passed') : console.log('🛑    Assertion Failed:');
}

assertArraysEqual(test, [ 'g', 'c', 't', 'm', 't' ]); // => should PASS
