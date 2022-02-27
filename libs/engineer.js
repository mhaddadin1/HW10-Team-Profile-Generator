const Employee = require("./employee");

class Engineer extends Employee {
  constructor(employeeName, employeeId, email, githubUsername) {
    super(employeeName, employeeId, email);
    this.githubUsername = githubUsername;
  }

  getRole() {
    return "engineer";
  }

  getGithubUser() {
    return this.githubUsername;
  }
}

module.exports = Engineer;
