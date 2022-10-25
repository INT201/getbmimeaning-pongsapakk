const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/Math.pow(height,2)
}

function getBMIMeaning(weight, height) {
const resultOfBMI = calculateBMI(weight,height)

 if(resultOfBMI < 18.5) { 
  return "Underweight"
}else if (resultOfBMI >= 18.5 && resultOfBMI <= 24.9){
  return "Normal weight"
}else{
  return "Overweight"
}
}
module.exports = getBMIMeaning

// test git