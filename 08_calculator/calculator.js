const add = function() {
	let sum = 0;
  for(num of arguments){
    sum += num
  }
  return sum
};

const subtract = function() {
	return arguments[0] - arguments[1]
};

const sum = function(array) {
	let sum = 0;
  for(num of array){
    sum += num
  }
  return sum
};

const multiply = function(array) {
  let product = 1;
  for(num of array){
    product *= num
  }
  return product
};

const power = function() {
	return Math.pow(arguments[0], arguments[1])
};

const factorial = function() {
  let num = arguments[0]
  let result = 1;
	if(num == 0){
    return 1
  }
  else{
    for(i=num; i>0; i--){
      result *= i
    }
    return result
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
