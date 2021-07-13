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
            message:"Write a description for your intended project?",
            name:"description",
        },
        {
            type:"input",
            message:"What are the contents of the readme?",
            name:"TableofContents",
        },
        {
            type:"input",
            message:"What are the contents of the readme?",
            name:"TableofContents1",
        },
        {
            type:"input",
            message:"What are the contents of the readme?",
            name:"TableofContents2",
        },
        {
            type:"input",
            message:"What are the contents of the readme?",
            name:"TableofContents3",
        },
        {
            type:"input",
            message:"What are the contents of the readme?",
            name:"TableofContents4",
        },
        {
            type:"input",
            message:"What are the contents of the readme?",
            name:"TableofContents5",
        },
        {
            type:"input",
            message:"Provide instructions for installation?",
            name:"Installation",
        },
        {
            type:"input",
            message:"Provide instructions and examples for usage?",
            name:"Usage",
        },
        {
            type:"input",
            message:"List all licencess?",
            name:"License",
        },
        {
            type:"input",
            message:"If you have created application or package and would like other developer to contribute please create instructions here?", 
            name:"Contributing",
        },
        {
            type:"input",
            message:"Input any test you have fore your application and provide examples on how to run it here?",
            name:"Tests",
        },
        {
            type:"input",
            message:"What is your email?",
            name:"Question1",
        },
        {
            type:"input",
            message:"What is your github Username?",
            name:"Question2",
        },
        
    ]



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readMeContent=generateMarkdown(data);
    fs.writeFileSync(fileName, readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// TODO: Create a function to initialize app
function init() {
    //use inquirer.prompt().then() to prompt the user for answers
        //THEN () we will use the users answers to genrateMarkdown(answers) and store the result in markdownText
        //Use the generated markdowntext to writeToFile("output.md",markdownText)
        inquirer.prompt(questions).then(answers=>{
            writeToFile('README.md', answers)
        })
  
}

// Function call to initialize app
init();
