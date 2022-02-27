//require files
const inquirer = require("inquirer");
const fs = require("fs");
//const Employee = require("./libs/employee");
const Manager = require("./libs/manager");
const Engineer = require("./libs/engineer");
const Intern = require("./libs/intern");
const employees = [];

function createPerson() {
  // ask questions
  inquirer
    .prompt([
      {
        name: "role",
        type: "list",
        message: "please select role",

        choices: ["manager", "engineer", "intern", "done"],
      },
      {
        name: "employeeName",
        type: "input",
        when: (answers) => answers.role !== "done",
        message: "enter employee name",
      },
      {
        name: "employeeId",
        type: "input",
        when: (answers) => answers.role !== "done",
        message: "enter employee id",
      },
      {
        name: "email",
        type: "input",
        when: (answers) => answers.role !== "done",
        message: "enter employee email",
      },
      {
        name: "officeNumber",
        type: "input",
        when: (answers) => answers.role === "manager",
        message: "enter employee office number",
      },
      {
        name: "githubUsername",
        type: "input",
        when: (answers) => answers.role === "engineer",
        message: "enter employee github username",
      },
      {
        name: "school",
        type: "input",
        when: (answers) => answers.role === "intern",
        message: "enter interns school name",
      },
    ])
    .then((answers) => {
      // if logic here based on what they choose

      if (answers.role === "manager") {
        const manager = new Manager(
          answers.employeeName,
          answers.employeeId,
          answers.email,
          answers.officeNumber
        );

        employees.push(manager);

        createPerson();
      } else if (answers.role === "engineer") {
        const engineer = new Engineer(
          answers.employeeName,
          answers.employeeId,
          answers.email,
          answers.githubUsername
        );

        employees.push(engineer);
        createPerson();
      } else if (answers.role === "intern") {
        const intern = new Intern(
          answers.employeeName,
          answers.employeeId,
          answers.email,
          answers.school
        );

        employees.push(intern);
        createPerson();
      } else {
        // take array and send to generatehtml function
        const theHTML = generateHTML();
        fs.writeFile("index.html", theHTML, (err) =>
          err ? console.log(err) : console.log("success")
        );
      }
    });
}
createPerson();

const generateHTML = () => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
<header class="navbar bg-primary text-white justify-content-center align-items-center">
    <h1>My Team:</h1>
  </header>
  <div class=" justify-content-center row">
        ${card()}
    </div>


</body>

</html>`;
};

//loop
function card() {
  let cardHtml = "";

  employees.forEach((employee) => {
    cardHtml += `<div class="border border-success card m-5 rounded" style="width: 18rem;">
<div class="bg-primary p-3 text-white">
 Name: ${employee.employeeName}
</div>
<ul class="list-group list-group-flush">
  <li class="list-group-item">Role: ${employee.getRole()}</li>
  <li class="list-group-item">ID: ${employee.employeeId}</li>
  <li class="list-group-item">Email: ${employee.email}</li>
  ${employeeCard(employee)}
  

</ul>
</div>`;
  });

  return cardHtml;
}

function employeeCard(employee) {
  let employeeCard = "";
  if (employee.getRole() === "manager") {
    return `<li class="list-group-item">Office Number: ${employee.officeNumber}</li>`;
  } else if (employee.getRole() === "engineer") {
    return `<li class="list-group-item">Github Username: ${employee.githubUsername}</li>`;
  } else if (employee.getRole() === "intern") {
    return `<li class="list-group-item">school: ${employee.school}</li>`;
  }

  return employeeCard;
}
