const fs = require('fs');
const inquirer = require('inquirer');

const employees = [];

console.log("This is the Team Generator app! Let's get started.");

function addManager() {
    inquirer
        .prompt([
            {
                message: "What is the team manager's name?",
                type: "input",
                name: "name",
            },
            {
                message: "What is the team manager's ID?",
                type: "number",
                name: "id",
            },
            {
                message: "What is the team manager's email?",
                type: "input",
                name: "email",
            },
            {
                message: "What is the team manager's office number?",
                type: "input",
                name: "officeNumber",
            },
        ]).then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);

            employees.push(manager);

            // push manager ID to a separate array?

            addEmployee();
        })
};

addManager();

function addEmployee() {
    inquirer
        .prompt([
            {
                message: "Which type of team member would you like to add?",
                type: "list",
                choices: ["Engineer", "Intern", "I don't want to add any more team members."],
                name: "add-member",

            }
        ]).then((response) => {
            // response.add-member
            switch (response.add - member) {
                case "Engineer":
                    addEngineer()
                    break;
                case "Intern":
                    addIntern()
                    break;
                default:
                    buildTeam()
            };
        });
    };

    

    function addEngineer() {
        inquirer
        .prompt([
            {
                message: "What is the team manager's name?",
                type: "input",
                name: "name",
            },
            {
                message: "What is the team manager's ID?",
                type: "input",
                name: "id",
            },
            {
                message: "What is the team manager's email?",
                type: "input",
                name: "email",
            },
            {
                message: "What is the team manager's office number?",
                type: "input",
                name: "github",
            },
        ]).then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);

            employees.push(engineer);

            addEmployee();
        })
    };

    function addIntern() {

    };

    function buildTeam() {

        // create an html file and css file

    }

    // make separate prompt functions for each type of employee
    // separate function that outputs html, that builds file