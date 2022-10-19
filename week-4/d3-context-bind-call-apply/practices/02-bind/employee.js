// Your code here
class Employee{
    constructor(name, occupation, Employee){
        this.name = name;
        this.occupation = occupation;
        this.Employee = Employee;
    }

    sayName(){
        console.log(`${this.name} says hello`)
    }
    sayOccupation(){
        console.log(`${this.name} is a ${this.occupation}`)
    }
}

module.exports = Employee