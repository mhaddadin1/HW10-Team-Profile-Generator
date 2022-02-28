const Manager = require("../libs/manager");

describe(`manager`, () => {
  it(`should create a new manager object when initialized`, () => {
    const manager = new Manager();
    expect(typeof manager).toBe("object");
  });

  it(`should set officeNumber via the constructor`, () => {
    const employee = new Manager(
      "mousa",
      1,
      "mousahaddadin@gmail.com",
      7087697153
    );
    expect(employee.officeNumber).toBe(7087697153);
  });

  it(`should return officeNumber when getOfficeNumber is called`, () => {
    const employee = new Manager(
      "mousa",
      1,
      "mousahaddadin@gmail.com",
      7087697153
    );
    expect(employee.getOfficeNumber()).toBe(7087697153);
  });
});
