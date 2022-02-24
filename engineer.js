const Employee = require("./employee");

class Engineer extends Employee {
  constructor(githubUsername) {
    super(employeeName, employeeId, email);
    this.githubUsername = githubUsername;
  }
}

module.exports = Engineer;
