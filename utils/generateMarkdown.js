let badgeLink;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    badgeLink = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license == "APACHE 2.0") {
    badgeLink = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  } else if (license == "GPL 3.0") {
    badgeLink = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license == "BSD 3") {
    badgeLink = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  } else {
    badgeLink = ""
  }
  return badgeLink
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {

  } else if (license == "APACHE 2.0") {

  } else if (license == "GPL 3.0") {

  } else if (license == "BSD 3") {

  } else {

  }
  return 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "MIT") {

  } else if (license == "APACHE 2.0") {

  } else if (license == "GPL 3.0") {

  } else if (license == "BSD 3") {

  } else {

  }
  return 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  renderLicenseBadge(data.license);

  ` ${badgeLink}
  
  # ${data.title} //<Your-Project-Title>

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [How to Contribute](#how-to-contribute)
  - [Test](#tests)
  - [Contact](#contact)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## Credits
  
  //${data.credits}
  
  ## License
  
  ${data.license} // [https://choosealicense.com/](https://choosealicense.com/).
  
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.test} //Go the extra mile and write tests for your application. Then provide examples on how to run them here.

  ## Contact

  //fix it and add links?
  ${data.username}
  ${data.email}`

  //?????
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

