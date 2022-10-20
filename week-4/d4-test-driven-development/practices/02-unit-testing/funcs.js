function isFive(num) {
	// Your code here
	if (num === 5) {
		return true;
	} else {
		return false;
	}
}

function isOdd(number) {
	if (typeof number !== "number") {
		throw new TypeError("Invalid, must use a number");
	} else {
		if (number % 2 !== 0) {
			return true;
		} else if (number % 2 === 0) {
			return false;
		}
	}
}

function myRange(min, max, step = 1, arr = []) {
	// Your code here
  if (min > max){
    return arr;
  } else {
    arr.push(min);
    min += step;
    return myRange(min, max, step, arr);
  }
}

module.exports = { isFive, isOdd, myRange };
