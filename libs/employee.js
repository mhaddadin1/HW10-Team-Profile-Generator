class Employee {
  constructor(employeeName, employeeId, email) {
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.email = email;
  }
  getName() {
    return this.employeeName;
  }
  getId() {
    return this.employeeId;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "employee";
  }
}

module.exports = Employee;
