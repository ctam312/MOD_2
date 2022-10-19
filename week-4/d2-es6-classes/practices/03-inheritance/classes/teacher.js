const Person = require('./person');

// Your code here
class Teacher extends Person {
  constructor (firstName, lastName, subject, yearsOfExperience){
    super(firstName,lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teachers) {
    let yearsOfExperience = 0;
    teachers.forEach(teacher => yearsOfExperience += teacher.yearsOfExperience);
    return yearsOfExperience
  }

}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}
