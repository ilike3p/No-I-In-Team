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