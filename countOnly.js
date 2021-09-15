const assertEqual = function(actual, expected) {
 
  (actual === expected) ? console.log(`✅ Assertion Passed:${actual} === ${expected}`) : console.log(`🛑   Assertion Failed: ${actual} !== ${expected}`);
  
};

const countOnly = function(allItems, itemsToCount) {

  const targetStats = {};
  for (const item of allItems){
    itemsToCount[item] ? 
      targetStats[item] ?
      targetStats[item] += 1 : targetStats[item] = 1
    : true 
  }
return targetStats;
}



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);