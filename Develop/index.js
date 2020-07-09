const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fileName = "README.md";


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    {
        type: "input",
        message: "How do you install your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage information?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "tests"
    },
    {
        type: "list",
        message: "Please select a type of license.",
        name: "license",
        choices: [
            "MIT",
            "Apache",
            "ISC",
            "GNU GPLv3"
        ]
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    // Create Markdown from data
    const markdown = generateMarkdown(data);
    // Write Markdown file
    fs.writeFile(fileName, markdown, function (err) {
        if (err) throw err;
        console.log("Success!");
    });
}

// function to initialize program
function init() {
    // inquirer module
    inquirer
     .prompt(questions)
     .then(function(data) {
         writeToFile(fileName,data)
     })
}

// function call to initialize program
init();
