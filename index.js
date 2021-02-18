const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            message: "This is the Team Generator app! Let's get started.",
            type: "list",
            choices: ["Ok", "Wait, I'm not ready"],
            name: "intro",
        },
        {
            message: "What is the team manager's name?",
            type: "input",
            name: "manager",
        },
        {
            message: "What is the team manager's ID?",
            type: "input",
            name: "manager-id",
        },
        {
            message: "What is the team manager's email?",
            type: "input",
            name: "manager-email",
        },
        {
            message: "What is the team manager's office number?",
            type: "input",
            name: "manager-office",
        },
        {
            message: "Which type of team member would you like to add?",
            type: "list",
            choices: ["Engineer", "Intern", "I don't want to add any more team members."],
            name: "add-member",
        }
    ]).then((response) => {

    })