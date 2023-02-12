const inquirer = require("inquirer");
const fs = require("fs"); 
const generateHtml = require("./src/template");

const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArray = [];

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the team manager's name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter their employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "Enter their email address",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter their office phone number",
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      teamArray.push(manager);
      createMember();
    });
}

function createMember() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Select an engineer, intern, or generate team.",
        choices: ["engineer", "intern", "generate team"],
      },
    ])
    .then((answers) => {
      if (answers.choice === "engineer") {
        createEngineer();
      } else if (answers.choice === "intern") {
        createIntern();
      } else {
        createTeam();
      }
    });
}

function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter their name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter their employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "Enter their email address",
      },
      {
        type: "input",
        name: "github",
        message: "Enter their github name",
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamArray.push(engineer);
      createMember();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter their name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter their employee ID",
      },
      {
        type: "input",
        name: "email",
        message: "Enter their email address",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the name of their school",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamArray.push(intern);
      createMember();
    });
}

function createTeam() {
    fs.writeFile("./dist/output.html", generateHtml(teamArray), (err) =>
    err ? console.log(err) : console.log("Successfully created HTML file!")
  );
    console.log(teamArray);
}
createManager();