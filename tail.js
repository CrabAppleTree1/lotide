


const tail = function(anArray) {
  let returnArray = [];
  returnArray[0] = anArray.pop(1);
  return returnArray;

};

module.exports = tail;