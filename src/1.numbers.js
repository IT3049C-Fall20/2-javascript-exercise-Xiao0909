//add: Should be able to add numbers
function add (num1, num2) {
  const result = num1 + num2
  return result;
}

//subtract: Should be able to subtract numbers
function subtract (num1, num2) {
  const result = num1 - num2
  return result;
}

//multiply: Should be able to multiply with precision
function multiply(num1, num2) {
  const result = num1*num2
  return result;
}

//parseInt: should use parseInt correctly to convert strings to integer numbers
function parseInt (str) {
  const result = Number.parseInt(str,10)
  
  return result;
}

//addAndReturn2DecimalPlaces: should return a number value, rounded to 2 decimal places
// Example: 1.23453 + 5.37873 should return 6.61 and the return type should be a number
function addAndReturn2DecimalPlaces(num1, num2) {
  const result = num1 + num2
 return Number((result).toFixed(2));
}

module.exports  = {
  add,
  subtract,
  multiply,
  parseInt,
  addAndReturn2DecimalPlaces
};