//path module
//it provides utilities for working with file and directory paths 

const path = require("path");

//path of file C:/Users/ASUS/Desktop/Node Js full In feb 2024/path.js

//directory name
//console.log(path.dirname('C:/Users/ASUS/Desktop/Node Js full In feb 2024/path.js'));

//extension name like .js
//console.log(path.extname('C:/Users/ASUS/Desktop/Node Js full In feb 2024/path.js'));


//file name
//console.log(path.basename('C:/Users/ASUS/Desktop/Node Js full In feb 2024/path.js'));

//all properties  // it is object 
//console.log(path.parse('C:/Users/ASUS/Desktop/Node Js full In feb 2024/path.js'));

const myPath = path.parse('C:/Users/ASUS/Desktop/Node Js full In feb 2024/path.js');
console.log(myPath.name);