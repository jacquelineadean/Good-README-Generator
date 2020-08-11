# Good README.md Generator

## Description 
When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

![Example](/Assets/ExampleREADME.png)

### User Story
```
AS A developer<br>
I WANT a README generator<br>
SO THAT can quickly create a professional README for a new project
```

### Acceptance Criteria
```
GIVEN a command-line application that accepts user input<br>
WHEN I am prompted for information about my application repository<br>
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions<br>
WHEN I enter my project title<br>
THEN this is displayed as the title of the README<br>
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions<br>
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests<br>
WHEN I choose a license for my application from a list of options<br>
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under<br>
WHEN I enter my GitHub username<br>
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile<br>
WHEN I enter my email address<br>
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions<br>
WHEN I click on the links in the Table of Contents<br>
THEN I am taken to the corresponding section of the README
```

# Table of Contents
[Installation](#installation)

[Usage](#usage)

[Questions](#questions)

# Installation
In order to use the application, the user will need to have node.js installed and then will need to clone the repository into the command line. Once the repository has been cloned, the user will need to change directories into the repository and run the command "npm install" in order to retrieve the neccessary dependencies. 

![How-to Video](/Assets/GeneratorTutorial.webm)

# Usage
The application is designed to run within the command-line. Once the user has installed the program and run the "npm install" command, they will need to run "node index.js" to begin the prompt regarding the README content. The user will then need to answer the questions accordingly and at the end they will receive a success message and a README will be generated within the folder. 

# Questions
For any questions, please connect with me:

Github username: Jacquelineadean

Github URL: https://github.com/jacquelineadean/

LinkedIn: https://www.linkedin.com/in/jacqueline-dean-968a66150/

Email: Jacquelineadean@gmail.com



