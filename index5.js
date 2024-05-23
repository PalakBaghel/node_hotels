const fs = require("fs");

//folder ccreated

// fs.mkdir("thapa", (err)=>{
//     console.log(" folder created");
// });

//create file and write

// fs.writeFile("thapa/bio.txt", "my name is palak",(err)=>{
//     console.log(" file created");
// } )

//append file
// fs.appendFile("thapa/bio.txt", "  my name is palak baghel",(err)=>{
//     console.log(" file data appended");
// } )

// //read data
// fs.readFile("thapa/bio.txt","utf8",(err, data)=>{
//     console.log(data);
//     console.log(err);
// } )
// console.log("read data");

//rename file
// fs.rename("thapa/bio.txt", "thapa/bio1.txt",(err)=>{
//     console.log(" file renamed");
// } )

//delete file

// fs.unlink("thapa/bio1.txt",(err)=>{
//     console.log(" file deleted");
// } )

//folder delete
fs.rmdir("thapa", (err)=>{
    console.log("folder deleted");
} )