const Employee = require("./employee");

class Manager extends Employee {
  constructor(employeeName, employeeId, email, officeNumber) {
    super(employeeName, employeeId, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
