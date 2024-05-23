//stream.pipe() - the method used to take a readable stream and connect it to a writeable stream

//3rd way
const fs = require('fs');
const http = require('http');
const server = http.createServer();



server.on('request', (req, res)=>{
                          //kis file ko read krna h
    const rstream = fs.createReadStream("input.txt");
    //data read krke kaha write krana h 
    
              //destination
    rstream.pipe(res);
   
});

server.listen(8000, "127.0.0.1");
