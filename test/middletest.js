// const assertArraysEqual = require('../assertArraysEqual')
// const eqArrays = require("../eqArrays");
// const middle = require('../middle')


// // console.log(middle([2,4,5,1,3]))
// assertArraysEqual(eqArrays(), true); // => should PASS
// assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
// assertArraysEqual(eqArrays(middle([12, 13, 15, 16, 1, 2, 3, 5, 6, 7, 9]), [2]), true)

const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it(`returns [2] for [12, 13, 15, 16, 1, 2, 3, 5, 6, 7, 9]`, () => {
    assert.deepEqual(middle([12, 13, 15, 16, 1, 2, 3, 5, 6, 7, 9]), [2]);
  });
  it(`returns [2, 3] for [1, 2, 3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
});