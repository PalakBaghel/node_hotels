//API is acronym for application programming interface, which is a software intermediary 
//that allows two applo\ications to talk to each other
//eg chk the weather on your phone you use api

const http = require("http");

const fs = require("fs")


const server = http.createServer((req, res) => {
   // console.log(req.url);
 
   //****************************************************************************8 */
//we want to run data or json code only one time so use synchronosu version
// fs.readFileSync(`${__dirname}/userApi.json`, "utf-8")
// const objectData = JSON.parse(data); // converted to object
//console.log(data);
 //***************************************************************************** */  

   if(req.url == "/"){
    res.end("hello from the other side palak baghel");
   }
   else if(req.url == "/about"){
    res.end("hello from the about palak baghel");
   }
   else if(req.url == "/contact"){
    res.end("hello from the contactUs palak baghel");
   }
   //whne we type localhost:8000/userapi
   //*************************************************************8 */
   else if(req.url == "/userapi"){
     // this is asynchronous version
    //            current directory k andar userapi.json
    fs.readFile(`${__dirname}/userApi.json`, "utf-8", (err, data) =>{
        //data will print in terminal and also on web page
       // console.log(data);
        //this wiill show data on web page in browser
                    //success and json ka content h 
        res.writeHead("200", {"Content-type" : "application/json"});
        res.end(data);
    });

  // res.end("hello");
   }
   //************************************************************** */
   else{
    //client error 404 error
    //sucessful responses = 200-299
    //before 404 in writehead it is not showing error it is showing 200 and running
    //so we have to write 404 error in writehead to show error in page which is not found like localhost:8000/aboutssss

    // {"Content-type" : "text/html"} this is shown in header of network in inspect page of browser
    res.writeHead("404", {"Content-type" : "text/html"});
    res.end("<h1>404 error, page not exist </h1>");
   }
  
});

//kya request mil rha h 
//port number, ip address or local host  , callback are passed
//now it is listeniing to port 8000
//run localhost:8000 in browser

server.listen(8000, "127.0.0.1" , () =>{
    console.log("listening to the port no 8000");
});