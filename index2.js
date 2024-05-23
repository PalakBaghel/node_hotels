//synchronous file system


const fs = require("fs");

//make directory synchrously  (new folder)
//fs.mkdirSync("thapa");


//file will be created under thapa folder
fs.writeFileSync("thapa/bio.txt", "my name is palak");

//append data

fs.appendFileSync("thapa/bio.txt", " Kind is this");

//encoding helps to get data without use of buffer

const data = fs.readFileSync("thapa/bio.txt", "utf8");

//console.log(data);


//rename file
//fs.renameSync("thapa/bio.txt", "thapa/mybio.txt");

//delete file
//fs.unlinkSync("thapa/mybio.txt");

//delete folder
//fs.rmdirSync("thapa");






