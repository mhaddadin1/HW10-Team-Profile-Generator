const Employee = require("./employee");

class Intern extends Employee {
  constructor(school) {
    super(employeeName, employeeId, email);
    this.school = school;
  }
}

module.exports = Intern;
