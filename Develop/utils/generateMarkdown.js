// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description
  ${data.description}

  # Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#liscense)
  [Contribution](#contribution)
  [Tests](#tests)
  [Questions](#questions)

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # License
  ${data.license}

  # Contribution
  ${data.contribution}

  # Tests
  ${data.tests}

  # Questions
  **Github Username:** ${data.username}
  **Github Profile:** www.github.com/${data.username}/
  **Email Address:** ${data.email}
`;
}

// Export Markdown File
module.exports = generateMarkdown;
