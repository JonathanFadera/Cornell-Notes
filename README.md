# Cornell Notes

![Badge](https://img.shields.io/badge/License-MIT-blue.svg)

Express.js Note Taker 

## Description 
Create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

## Table of Contents 
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Tests](#tests)
  - [Credits](#credits)
  - [Questions](#questions)
  - [Deployed Application](#deployed-application)

## Installation
Clone the starter code repository and make your own repository with the starter code.

## Usage
As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

## License
    This application is covered by the MIT license.

## Tests
On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


## Credits
[Jonathan Fadera](https://github.com/JonathanFadera), [Week_11-Express.js](https://ucb.bootcampcontent.com/UCB-Coding-Bootcamp/UCB-VIRT-FSF-PT-01-2023-U-LOLC/-/tree/main/Week_11-Express)

## Questions
If there are any questions, feel free to contact my email at: ericsonhnc@gmail.com

You can also find me on GitHub at: [JonathanFadera](https://www.github.com/JonathanFadera)

## Deployed Application
This application was deployed at [https://github.com/JonathanFadera/express_note_taker](https://github.com/JonathanFadera/express_note_taker)
