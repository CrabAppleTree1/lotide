const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');



const middle = function (anArray) {
  let middleElem = [];
  let len = anArray.length;

  if(len > 2){
    if (len % 2 == 0){
      middleElem = [anArray[Math.ceil(anArray.length / 2) - 1], anArray[Math.ceil(anArray.length / 2)]]
      console.log('here')
    } else {
      middleElem = [anArray[Math.floor(anArray.length / 2)]];
    }
   
  } 
  
  return middleElem;  


}
console.log(middle([2,4,5,1,3]))
assertArraysEqual(eqArrays([1, 2, 3], [2]), true); // => should PASS
assertArraysEqual(eqArrays([1, 2, 3, 4], [2, 3]), true);
assertArraysEqual(eqArrays([12, 13, 15, 16, 1, 2, 3, 5, 6, 7, 9], [2]), true)

