const Employee = require("../libs/employee");

describe(`employee`, () => {
  it(`should create a new employee object when initialized`, () => {
    const employee = new Employee();
    expect(typeof employee).toBe("object");
  });

  it(`should set name via the constructor`, () => {
    const employee = new Employee("Mousa", 1, "mousa@gmail.com");
    expect(employee.employeeName).toBe("Mousa");
  });

  it(`should set id via the constructor`, () => {
    const employee = new Employee("Mousa", 1, "mousa@gmail.com", "employee");
    expect(employee.employeeId).toBe(1);
  });

  it(`should set email via the constructor`, () => {
    const employee = new Employee("Mousa", 1, "mousa@gmail.com", "employee");
    expect(employee.email).toBe("mousa@gmail.com");
  });

  it(`should return the id when the getId is called`, () => {
    const employee = new Employee("Mousa", 1, "mousa@gmail.com");
    expect(employee.getId()).toBe(1);
  });

  it(`should return the email when the getEmail is called`, () => {
    const employee = new Employee("Mousa", 1, "mousa@gmail.com");
    expect(employee.getEmail()).toBe("mousa@gmail.com");
  });

  it(`should return the role when the getRole is called`, () => {
    const employee = new Employee("Mousa", 1, "mousa@gmail.com", "employee");
    expect(employee.getRole()).toBe("employee");
  });
});
