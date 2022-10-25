const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
	let arr = [];

	for (let i = increment; i <= 10 * increment; i += increment) {
		arr.push(addNums(i));
	}
	return arr;
}
//n^2

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
	let poop = [];
	for (let i = increment; i <= 10 * increment; i += increment) {
		poop.push(addManyNums(i));
	}
	return poop;
}

//n^3

module.exports = [addNums10, addManyNums10];
