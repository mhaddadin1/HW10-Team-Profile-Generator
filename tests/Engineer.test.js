const Engineer = require("../libs/engineer");

describe(`engineer`, () => {
  it(`should create a new employee object when initialized`, () => {
    const engineer = new Engineer();
    expect(typeof engineer).toBe("object");
  });

  it(`should set github username via the constructor`, () => {
    const employee = new Engineer(
      "mousa",
      1,
      "mousahaddadin@gmail.com",
      "mhaddadin"
    );
    expect(employee.githubUsername).toBe("mhaddadin");
  });

  it(`should return role when getRole is called`, () => {
    const employee = new Engineer("engineer");
    expect(employee.getRole()).toBe("engineer");
  });

  it(`should return github username when getGithubUser is called`, () => {
    const employee = new Engineer(
      "mousa",
      1,
      "mousahaddadin@gmail.com",
      "mhaddadin"
    );
    expect(employee.getGithubUser()).toBe("mhaddadin");
  });
});
