class Employee {
  constructor(employeeName, employeeId, email, role) {
    this.employeeName = employeeName;
    this.employeeId = employeeId;
    this.email = email;
    this.role = role;
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
    return this.role;
  }
}

module.exports = Employee;
