//stream in nodejs
//real time streaming
//streams are objects that let you read data from a source or write a data to a destination 
//in continuous fashion in node JS there are four type of stream-
// streaming means listening to music or watching video in real time instead of downloading a file to your 
//computer and watching it later

//readable- stream which is used to read operation
// writeable - stream which is used to write operation 
//duplex - stream which can be used for both read and write operation 
//transform - a type of duplex stream where the output is computed based on input

//each type of stream is an EventEmitter instance and throw several events at different instance of times
// for example some of the commonly used events are 
//data = this event is fired when there is data is available to read 
//end = this event is fired when there is no more data to read 
//error = this event is fired when there is any error receiving or writing data 
//finish = this event is fired when all data has been flushed to underlying system


const fs = require('fs');
const http = require('http');
const server = http.createServer();

//first way toread data in simple way whole file will be printed on server

// //jb bhi koi req kare toh kya krna h
// server.on('request', (req, res)=>{
//     fs.readFile("input.txt", (err, data)=>{
//         if(err) return console.log(err);
//         res.end(data.toString());
//     });
// });

//second way
//to stresm data line by line
//reading from stream
//create a readble stream
//handle stream events - data, end , error


server.on('request', (req, res)=>{
                          //kis file ko read krna h
    const rstream = fs.createReadStream("input.txt");
   //chunk by chunk reading data
    rstream.on("data" , (chunkdata)=>{
        //show data
        res.write(chunkdata);
    });

    //response de rhe h after reading all data
   rstream.on('end', ()=>{
    res.end();
   });
   //if file not found then show this
   rstream.on('error', (err)=>{
    console.log(err);
    res.end("file not found");
   });
});

server.listen(8000, "127.0.0.1");

