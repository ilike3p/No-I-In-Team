// Con Declaration
const inquirer = require("inquirer");
const fs = require("fs");

// Employee role declaration
const Manager = require("Develop/library/Manager.js");
const Engineer = require("Develop/library/Engineer.js");
const Intern = require("Develop/library/Intern.js");
let myTeam = [];

// employee role declaration
const Manager = require("Develop/library/Manager.js");
const Engineer = require("Develop/library/Engineer.js");
const Intern = require("Develop/library/Intern.js");
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
// intern profile
function addIntern() {
    inquirer.prompt([{
                type: "input",
                name: "name",
                message: "The intern's name?",
            },
            {
                type: "input",
                name: "id",
                message: "The intern's employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "The intern's email address?",
            },
            {
                type: "input",
                name: "school",
                message: "The intern's school?",
            },
        ])
        // push intern
        .then(function(data) {
            let name = data.name;
            let id = data.id;
            let email = data.email;
            let school = data.school;
            let teammate = new Intern(name, id, email, school);
            myTeam.push(teammate);
            addMember();
        });
}
// Page creation
function buildMyTeam() {
    console.log("Team profile is ready! Please check the 'dist' folder for your team page.");
    let pageArray = [];
    let pageHead = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <title>${myTeam[0]} | Team Page</title>
                    <meta name="description" content="Learn more about the best team: ${myTeam[0]}">
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" crossorigin="anonymous" />
                    <link rel="preconnect" href="https://fonts.gstatic.com">
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet">
                    <link rel="stylesheet" href="/Users/macbookpro/Desktop/UCLA /Home-work/No-I-In-Team/No-I-In-Team/dist/Css /style.css"/>
                    </head>
                    <body>
                        <div class="header"><h1>${myTeam[0]}</h1></div>
                        <div class="container">`;
    pageArray.push(pageHead);
    for (let i = 1; i < myTeam.length; i++) {
        let object = `
                            <div class="card">
                                <div class="card-header">
                                    <h3>${myTeam[i].name}</h3>
                                    <h4>${myTeam[i].title}</h4>
                                </div>
                                <div class="card-content">
                                    <p><strong>EMAIL:</strong> <a href="mailto:${myTeam[i].email}">${myTeam[i].email}</a></p>
                                    <p><strong>ID:</strong> ${myTeam[i].id}</p>`;
        // add number if employee is the mgr
        if (myTeam[i].officeNum) {
            object += `<p><strong>OFFICE: </strong> ${myTeam[i].officeNum}</p>`;
        }
        // add Github if employee is the engineer
        if (myTeam[i].github) {
            object += `<p><strong>GITHUB: </strong> <a href="https://github.com/${myTeam[i].github}" target="_blank">${myTeam[i].github}</a></p>`;
        }
        // add school if employee is Intern
        if (myTeam[i].school) {
            object += `<p><strong>SCHOOL: </strong> ${myTeam[i].school}</p>`;
        }
        // end
        object += `</div></div>`;
        pageArray.push(object);
    }
    // compose pg
    let endPage = `</div></body></html>`;
    pageArray.push(endPage);
    fs.writeFile(`./dist/${myTeam[0]}.html`, pageArray.join(""), function(err) {});
}
askUser();