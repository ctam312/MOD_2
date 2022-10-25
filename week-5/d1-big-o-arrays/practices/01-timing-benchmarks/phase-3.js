const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
	let arr = [];
	for (let i = increment; i <= 10 * increment; i += increment) {
        const start = Date.now();
		arr.push(addNums(i));
        const end = Date.now();
        console.log(end - start);
	}
	return arr;
}

function addManyNums10Timing(increment) {
	let poop = [];
	for (let i = increment; i <= 10 * increment; i += increment) {
        const start = Date.now();
		poop.push(addManyNums(i));
        const end = Date.now();
        console.log(end - start);
	}
	return poop;
}


n = 1000
console.log(`addNums(${n}): `);
addNums10Timing(10000000)


console.log("\n***********\n");


n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(1000);

