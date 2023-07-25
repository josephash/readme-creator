// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if (license === 'MIT') {
    link = 'https://opensource.org/licenses/MIT';
  } else if (license === 'GPL') {
    link = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let formattedLicense = [];
  if (license === 'MIT') {
    formattedLicense = [
      ['title', 'MIT License'],
      ['subtitle', 'Copyright (c) [year] [fullname]'],
      ['link', renderLicenseLink(license)],
      ['text', 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:',]
      ['text', 'The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.'],
      ['text', 'THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',]
    ];
  }
  else if (license === 'GPL') {
    formattedLicense = [
      ['title', 'GNU GENERAL PUBLIC LICENSE'],
    ];
  }
  else {
    return '';
  }
}

function generateItem(item) {
  if (item[0] === 'title') {
    return `# ${item[1]}`;
  } else if (item[0] === 'subtitle') {
    return `## ${item[1]}`;
  } else if (item[0] === 'text') {
    return `${item[1]}`;
  } else if (item[0] === 'list') {
    return `- ${item[1]}`;
  } else if (item[0] === 'link') {
    return `[${item[1]}](${item[2]})`;
  } else if (item[0] === 'image') {
    return `![${item[1]}](${item[2]})`;
  } else if (item[0] === 'code') {
    return `\`\`\`${item[1]}\`\`\``;
  } else if (item[0] === 'break') {
    return `---`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let output = '';
  for (i of data) {
    output += generateItem(i) + '\n';
  }
  return output;
}

module.exports = { generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection };
