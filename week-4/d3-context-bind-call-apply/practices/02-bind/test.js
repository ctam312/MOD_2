const Employee = require('./employee');

const JW = new Employee("John Wick", "Dog Lover");


setTimeout(JW.sayName.bind(JW), 2000);

setTimeout(JW.sayOccupation.bind(JW), 3000)