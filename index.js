//require files

const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./employee");
const Manager = require("./manager");
const Intern = require("./intern");

// ask questions
function askQuestions() {
  const questions = [
    {
      name: "name",
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
  ];
}
