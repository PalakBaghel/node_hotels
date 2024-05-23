//JSON stand for javascript object notation . json is lightweight format for storing and transporting data
//json is often used when data is sent from a server to web page


const fs = require("fs");
const bioData = {
    name : "vinod",
    age : 22,
    channel : "palak",
};

//console.log(bioData.channel);

//stringfy method is used when to convert object to json
//const jsonData = JSON.stringify(bioData);
//console.log(jsonData);
//console.log(jsonData.channel);  //this will show undefined //we cannot use this to show channel

//json to string or object
//const objectData  = JSON.parse(jsonData);
//console.log(objectData); // object will be output
//console.log(objectData.channel); // this will give channel name


//assigment
//connvert obj to json

const jsonData = JSON.stringify(bioData);

//dusre file m add kr do
//asynchrously creating new file

//           new file , data to add, callback
fs.writeFile('json1.json',jsonData, (err) =>{
    console.log("done");
});
///read data from json1.json in ashynchrouns way

fs.readFile("json1.json", "utf-8", (err, data) =>{
    // console.log(data);
    // console.log(err); // null

    //convert json to obj
    const originalData = JSON.parse(data);
    console.log(originalData); // this is object 
});
