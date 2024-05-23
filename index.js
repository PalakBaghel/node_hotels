//console.log("Welcome");

//REPL 

//NODE ENVIRONMENT WORK

//JS EXPRESSION AND USE(-) TO GET LAST LINE

// PS C:\Users\ASUS\Desktop\Node Js full In feb 2024> node
// Welcome to Node.js v20.11.0.
// Type ".help" for more information.
// > 3+3
// 6
// > _
// 6
// >

//cls to get clear terminal

//USE VARIABLES AND MULTILINE CODES/LOOPS

// Type ".help" for more information.
// > var x = 0;
// undefined
// > x
// 0
// > do
// ... {
// ... x++
// ... console.log(`${x}`)
// ... }while(x<3)
// 1
// 2
// 3
// undefined
// >


//WE CAN USE EDITR MODE

// PS C:\Users\ASUS\Desktop\Node Js full In feb 2024> node
// Welcome to Node.js v20.11.0.
// Type ".help" for more information.
// > 5+5
// 10
// > _
// 10
// > .editor
// // Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)


// const name = (myname) => { console.log(`${myname}`); }

// name("hi")


// hi
// undefined
// >

//CREATING A NEW FILE

const fs = require("fs");
//fs.writeFileSync("read.txt", "Welcome to this");

//override of text happen 
fs.writeFileSync("read.txt", "Here it is");

//append text

fs.appendFileSync("read.txt", "  HOW ARE YOU");


//read the data of file
//fs.readFileSync('read.txt');


//node js include additional datatype called buffer
//not availablie in browser js and buffer is mainly used to store binary dats while 
//reading from file or recieving packets over network


const buf_data = fs.readFileSync('read.txt');
//console.log(buf_data);

//<Buffer 48 65 72 65 20 69 74 20 69 73 20 20 48 4f 57 20 41 52 45 20 59 4f 55>

//to see orgininal data
org_data = buf_data.toString();
console.log(org_data);

//to rename file

//fs.renameSync("read.txt", "readwrite.txt");





























