// Con Declaration
const inquirer = require("inquirer");
const fs = require("fs");

// Employee role declaration
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");
let myTeam = [];