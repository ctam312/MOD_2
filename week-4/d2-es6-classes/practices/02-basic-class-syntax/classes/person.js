// Your code here
class Person {
	constructor(firstName, lastName, age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	introduce() {
		console.log(
			`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`
		);
		return this;
	}

	static introducePeople(arr) {
		if (!Array.isArray(arr)) {
			console.log("introducePeople only takes an array as an argument.");
			return this;
		}

		for (const person of arr) {
			if (!(person instanceof Person)) {
				console.log("All items in array must be Person class instances.");
				return this;
			}
		}
		arr.forEach((person) => person.introduce());
	}
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
	module.exports = Person;
} catch {
	module.exports = null;
}
