const Intern = require("../libs/intern");

describe(`intern`, () => {
  it(`should create a new intern object when initialized`, () => {
    const intern = new Intern();
    expect(typeof intern).toBe("object");
  });

  it(`should set school via the constructor`, () => {
    const employee = new Intern(
      "mousa",
      1,
      "mousahaddadin@gmail.com",
      "NorthWestern"
    );
    expect(employee.school).toBe("NorthWestern");
  });

  it(`should return School when getSchool is called `, () => {
    const employee = new Intern(
      "mousa",
      1,
      "mousahaddadin@gmail.com",
      "NorthWestern"
    );
    expect(employee.getSchool()).toBe("NorthWestern");
  });

  it(`should return role when getRole is called`, () => {
    const employee = new Intern("intern");
    expect(employee.getRole()).toBe("intern");
  });
});
