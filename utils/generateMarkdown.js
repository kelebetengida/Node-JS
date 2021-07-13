// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  # ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  * [${data.TableofContents}](##${data.TableofContents})
  * [${data.TableofContents1}](##${data.TableofContents1})
  * [${data.TableofContents2}](##${data.TableofContents2})
  * [${data.TableofContents3}](##${data.TableofContents3})
  * [${data.TableofContents4}](##${data.TableofContents4})
  * [${data.TableofContents5}](##${data.TableofContents5})
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## License
  ${data.License}
  ## How to Contribute
  ${data.Contributing}
  ## Tests
  ${data.Tests}
  ## Questions
  How to Reach me?
  * ${data.Question1}
  * github.com/${data.Question2}
  
`;
}

module.exports = generateMarkdown;
