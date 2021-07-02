// TODO: Include packages needed for this application
var inquirer =require("inquirer");

// TODO: Create an array of questions for user input
const questions = ["What is your project title?",
"Write a disciprtion for your intended project?",
"What are the installation instructions?",
"provide instructions and examples for usage?",
"If you have created application or package and would like other developer to contribute please create instructions here?", 
"Input any test you have fore ryour application and provide examples on how to run it here?"];

inquirer.prompt([questions])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
