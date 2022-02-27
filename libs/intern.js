const Employee = require("./employee");

class Intern extends Employee {
  constructor(employeeName, employeeId, email, school) {
    super(employeeName, employeeId, email);
    this.school = school;
  }

  getRole() {
    return "intern";
  }

  getSchool() {
    return this.school;
  }
}

module.exports = Intern;
