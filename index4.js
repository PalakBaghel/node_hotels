//Aynchronus vs synchronous

const fs = require("fs");

//synchronous

// const data = fs.readFileSync("read.txt", "utf8");
// console.log(data); // first this will print
// console.log("after the data");

//Aynchronus

fs.readFile("read.txt", "utf8", (err, data)=>{
    console.log(data);
});

console.log("after the data"); // first this will print
