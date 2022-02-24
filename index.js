//require files

const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./employee");
const Manager = require("./manager");
const Engineer = require("./engineer");
const Intern = require("./intern");

// ask questions
inquirer
  .prompt([
    {
      name: "role",
      type: "list",
      message: "please select role",
      choices: ["manager", "engineer", "intern"],
    },
    {
      name: "employeeName",
      type: "input",
      message: "enter employee name",
    },
    {
      name: "employeeId",
      type: "input",
      message: "enter employee id",
    },
    {
      name: "email",
      type: "input",
      message: "enter employee email",
    },
    {
      name: "officeNumber",
      type: "input",
      message: "enter employee office number",
    },
    {
      name: "githubUsername",
      type: "input",
      message: "enter employee github username",
    },
    {
      name: "school",
      type: "input",
      message: "enter interns school name",
    },
  ])
  .then((answers) => {
    const theHTML = generateHTML(answers);
    fs.writeFile("index.html", theHTML, (err) =>
      err ? console.log(err) : console.log("success")
    );
  });

const generateHTML = ({
  role,
  employeeName,
  employeeId,
  email,
  officeNumber,
  githubUsername,
  school,
}) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

</body>

</html>`;
};
