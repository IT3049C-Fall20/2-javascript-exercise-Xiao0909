// strictEquality: compare value & type
// Example: strictEquality(1, true) => false
// Example: strictEquality(1, 1) => true
function strictEquality(val1, val2, result) {
  if(val1 === val2){
    result = true;
  }
  else{
    result = false;
  }
  return result;
}
//equality: compare value but not necessarily the type
// Example: equality(1, true) => true
// Example: equality(1, 1) => true
// Example: equality(1, false) => false
function equality(val1, val2, result) {
  if(!(val1 == val2)){
    result = false;
  }
  else{
    result=true; 
  }
  return result;
}

module.exports = {
  strictEquality,
  equality
};
