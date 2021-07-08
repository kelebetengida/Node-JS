// TODO: Include packages needed for this application
const inquirer =require("inquirer");
const generateMarkdown=require("./utils/generateMarkdown");
const fs=require("fs");

// TODO: Create an array of questions for user input
const questions =[
        {
            type:"input",
            message:"What is your project title?",
            name:"title",
        },
        {
            type:"input",
            message:"Write a disciprtion for your intended project?",
            name:"discription",
        },
        {
            type:"input",
            message:"What are the installation instructions?",
            name:"instalation",
        },
        {
            type:"input",
            message:"Provide instructions and examples for usage?",
            name:"Usage",
        },
        {
            type:"input",
            message:"What are some of the features?",
            name:"features",
        },
        {
            type:"input",
            message:"If you have created application or package and would like other developer to contribute please create instructions here?", 
            name:"contribute",
        },
        {
            type:"input",
            message:"Input any test you have fore ryour application and provide examples on how to run it here?",
            name:"test",
        },
    ]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMeContent=generateMarkdown(data);
    fs.writeToFile(fileName, readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}

// TODO: Create a function to initialize app
function init() {
    //use inquirer.prompt().then() to prompt the user for answers
        //THEN () we will use the users answers to genrateMarkdown(answers) and store the result in markdownText
        //Use the generated markdowntext to writeToFile("output.md",markdownText)
        inquirer.prompt(questions).then(answers=>{
            writeToFile('test.README.md', answers)
        })
    //;
}

// Function call to initialize app
init();
