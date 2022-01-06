// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (renderLicenseBadge) {
    return true
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(data.license) {
    case 'MIT': licenseLink = 'https://opensource.org/licenses/MIT';
    break;

    case 'Apache': licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0';
    break;

    case 'GNU GPLv2': licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
    break;

    case 'ISC': licenseLink = 'https://www.isc.org/licenses/';
    break;

    case 'N/A' : 'This app has no license.'
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  # Table of Contents
  *[Contributing](#name)
  *[Description](#description)
  *[Languages](#languages)
  *[Install](#install)
  *[Usage][#usage]
  *[Tests](#tests)
  *[License](#license)
  *[Questions](#github)

  # Contributing
  ${data.name}

  # Description
  ${data.description}

  # Languages Used
  ${data.language}

  # Install
  ${data.install}

  # Usage
  ${data.useage}

  # Tests
  ${data.tests}

  # License
  ${data.license}

  # Questions
  *Github: (https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;