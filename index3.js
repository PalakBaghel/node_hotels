//Asynchronous file system

const fs = require("fs");
                                               //callback
// fs.writeFile("read.txt", "today is awesome day",(err) => {
//   console.log("file is created");
//   console.log(err);   //null if no error
// });


//we pass them a function as an argument - a callback
//that get called when that task is complete
//the callback has an argument that tells you wheather 
//the operation completed sucessfully
//now we need to say what to do when fs.writefile ha completed
//(even if it is nothing) and start cheking for errors



//append file

// fs.appendFile("read.txt", "my bvv",(err) => {
//        console.log("task completed");
//   //     console.log(err);  
     
//   }  );


//read data
fs.readFile("read.txt","utf8", (err, data)=>{
 console.log(data);
})