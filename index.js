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

// mgr info
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
// push mgr
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
// add member of team
function addMember() {
    inquirer.prompt([{
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Add an Engineer", "Add an Intern", "No. Complete my team!"],
            name: "addTeamData",
        }, ])
        .then(function(data) {
            switch (data.addTeamData) {
                case "Add an Engineer":
                    addEngineer();
                    break;
                case "Add an Intern":
                    addIntern();
                    break;
                case "No. Complete my team!":
                    buildMyTeam();
                    break;
            }
        });
}
// engineer profile
function addEngineer() {
    inquirer.prompt([{
                type: "input",
                name: "name",
                message: "The engineer's name?",
            },
            {
                type: "input",
                name: "id",
                message: "The engineer's employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "The engineer's email address?",
            },
            {
                type: "input",
                name: "github",
                message: "The engineer's GitHub username?",
            },
        ])
        // push engineer
        .then(function(data) {
            let name = data.name;
            let id = data.id;
            let email = data.email;
            let github = data.github;
            let teammate = new Engineer(name, id, email, github); 
            myTeam.push(teammate);
            addMember();
        });
}