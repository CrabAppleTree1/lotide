const middle = function (anArray) {
  let middleElem = [];
  let len = anArray.length;

  if(len > 2){
    if (len % 2 == 0){
      middleElem = [anArray[Math.ceil(anArray.length / 2) - 1], anArray[Math.ceil(anArray.length / 2)]]
    } else {
      middleElem = [anArray[Math.floor(anArray.length / 2)]];
    }
  } 
  return middleElem;  
}


module.exports = middle;