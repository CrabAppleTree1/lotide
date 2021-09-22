const eqArrays = require("./eqArrays");

const assertArraysEqual = function (funct, cond) {
  eqArrays(funct, cond) ? console.log('✅ Assertion Passed') : console.log('🛑    Assertion Failed:');
}




module.exports = assertArraysEqual;