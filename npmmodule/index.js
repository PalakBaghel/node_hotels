//node package manager npm
//npm init

//download chalk --- npm i chalk
//all dependencies are stored in packet.json file
//import chalk from 'chalk';
const chalk = require("chalk");
//console.log(chalk.blue.underline.inverse("Hello World"));

//validator
const validator = require('validator');
const res = validator.isEmail('palak@gmail.com');

console.log(res ? chalk.red.inverse(res) : chalk.blue.inverse(res));




//nodemon is tool automatically restarting the node application when file changes in directory are detected.
//npm install nodemon
//nodemon -v (to see version and chk if installation is right)
//in packet.json it is not shown bcoz it is global 
//global is installed in operating system


//to exitt out of terminal in nodemon environment do ctrl +c;
