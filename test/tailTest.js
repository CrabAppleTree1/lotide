// const assertEqual = require('../assertEqual');
// const tail = require('../tail');
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!



const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it(`returns ["Labs"] for ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Labs"]);
  });
  it(`returns [9] for [12, 13, 15, 16, 1, 2, 3, 5, 6, 7, 9]`, () => {
    assert.deepEqual(tail([12, 13, 15, 16, 1, 2, 3, 5, 6, 7, 9]), [9]);
  });
  it(`returns [4] for [1, 2, 3, 4]`, () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [4]);
  });
});