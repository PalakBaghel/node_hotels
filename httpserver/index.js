//the http.createServer() method include request and response parameters which is supplied by nodejs

//we pass call back in create server we have bydefault two parameter response and request

// the request object can be used to get information about the current http request 
//eg url, request header, and data

//the response object can be used to send a response for a current http request

//if the response from the http server is supposed to be displayed as HTML you should include an http header
//with correct content type:

const http = require("http");
const server = http.createServer((req, res) => {
   // console.log(req.url);
   if(req.url == "/"){
    res.end("hello from the other side palak baghel");
   }
   else if(req.url == "/about"){
    res.end("hello from the about palak baghel");
   }
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