const assertEqual = require('./assertEqual');
const findKeyByValue = function(anObj, aValue) {
  let keyValue = "";
  const keyHolder = Object.keys(anObj);
  for (let key of keyHolder) {
    if (anObj[key] === aValue) {
      keyValue = key;
      break;
    } else
      keyValue = undefined;
  }
  return keyValue;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Simpsons"), undefined);

