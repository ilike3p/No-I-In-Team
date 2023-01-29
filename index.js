// Con Declaration
const inquirer = require("inquirer");
const fs = require("fs");

// Employee role declaration
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
let myTeam = [];

// employee role declaration
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
let myTeam = [];

// team  initiation
function askUser() {
    return inquirer.prompt([{
            type: "input",
            message: "Your Team Name",
            name: "teamName",
        }, ])
        .then(function(data) {
            const teamName = data.teamName;
            myTeam.push(teamName);
            addManager();
        });
}

// manager info
function addManager() {
    inquirer.prompt([{
                type: "input",
                name: "name",
                message: "The manager's name?",
            },
            {
                type: "input",
                name: "id",
                message: "The manager's employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "The manager's email address?",
            },
            {
                type: "input",
                name: "officeNum",
                message: "The office phone number?",
            },
        ])
// Push manager
.then(function(data) {
    const name = data.name;
    const id = data.id;
    const email = data.email;
    const officeNum = data.officeNum;
    const teammate = new Manager(name, id, email, officeNum);
    myTeam.push(teammate);
    addMember();
});
}
