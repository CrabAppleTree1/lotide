
const eqArrays = function (a1, a2) {
  condition = true
  for (let i = 0; i < a1.length; i++) {
    
    if (a1[i] !== a2[i]) {
      condition = false
      break;
    }
  }
  return condition
}

module.export = eqArrays;






