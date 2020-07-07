const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
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
        }
    ])
    .then(function(response){
        fs.writeFile('README.md');
        fs.appendFile('README.md', 'data', (err) => {
            if (err) throw err;
            console.log('The data was appended to file!');
        });
    })
