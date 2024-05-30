// var fs = require('fs');
// var os = require('os');

// //it will give all info about user
// var user = os.userInfo();
// // console.log(user);
// // console.log(user.username);

//                   //file path, data, callback
// fs.appendFile('greet.txt', 'HI' + user.username + '\n', ()=>{
//     console.log('file is created'); // callback
// });


// const notes = require('./notes.js');
// var age = notes.age;
// console.log(age); // undefined
//      // if we write module.exporet then age will be printed 24
// console.log("hii server");

// var res = notes.addNumber(age, 15);
// console.log(res);


//lodash module

//_ used traditional way to use 
// var _ = require('lodash');

// var data  = ["person", 1 , 1 ,2 ,3, 4 , 4];
// var filter = _.uniq(data);
// console.log(filter);


//JSON TO OBJECT
                  //string
// const jsonString = '{"name" : "Alice", "age" : 24, "city" : "new york"}';

// const jsonObject = JSON.parse(jsonString);
// console.log(jsonObject);

// //object to json
// const jsonObjects = {name : "Alice", 
//             age : 24,
//            city : "new york"
//         };

// const jsonObjecs = JSON.stringify(jsonObjects);
// console.log(jsonObjecs);



//create get api in nodejs

const express = require('express');
const app = express(); // app m store krlo express ko // exprees ka blueprint imported in app
                       //app is like instance of express


const db = require('./db');
const passport = require('./auth');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body




//MIDDLEWARE FUNCTION
// imagine you are a restaurant and you have placed order for your favourite dish now before that dish reaches your table it goes through several stages in the kitchen each stage involves different task like chopping vegetable cooking and adding spices middleware is bit like these stages in the kitchen it's something that happens in between your request and the final response in the web application

const logRequest = (req, res, next) =>{
   console.log(`${new Date().toLocaleString()} Request Made to : ${req.originalURL}`);
   next(); //move on to next phase
}

//use in particular route "/"
// app.get('/',logRequest, function (req, res){
//   res.send('welcome to server')
// })
//to use in all route use 
app.use(logRequest);



//to initialize password in auth.js
app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', {session :false})

app.get('/', function (req, res){
  res.send('welcome to server')
})
const Person = require('./models/Person');

//server can only listen to these two get request  that is present in menu list
        //end point = '/'               
// app.get('/', function (req, res){
//     res.send('welcome to server')
// })

// app.get('/hello', (req, res)=>{
//     res.send("My name is palak");
// })

// app.get('/idli', (req, res)=>{
//     var custom_idli  = {
//         name  : "idli",
//         age : 1,
//         isidli: true
//     }
//     res.send(custom_idli);
// }) // output on server is in json format

//app.listen(3000); // 3000 is port number

//in browser do localhost:3000/
                //home->localhost 3000->address /=>data get

// app.post('/person' ,(req, res)=>{
//    const data = req.body // assuming the request body contains the person data

//    //create a new person document using the moongoose mode
//    //blank person 
//    const newPerson = new Person(data);
//    //to avoid all this hectic we passed data in it new person(data)
// //    newPerson.name = data.name;
// //    newPerson.age = data.age;
// //    newPerson.mobile = data.mobile;
// //    newPerson.email = data.email;
// //    newPerson.address = data.address;

// //save the new person to the database
// // newPerson.save((error, savedPerson)=>{
// //     if(error){
// //         console.log('error saving person:', error);
// //         res.status(500).json({error: 'Inrernal server error'});
// //     }
// //     else{
// //         console.log('data saved successfully');
// //         res.status(200).json(savedPerson);
// //     }
// // }) now this save method does not work as it depriciates 

// })


//async and await
app.post('/person' ,async(req, res)=>{
   try{
    // assuming the request body contains the person data
    const data = req.body
    //create a new person document using the moongoose mode//blank person
    const newPerson = new Person(data);
    //save the new person to the database
    const response =  await newPerson.save();
    console.log('data saved');
    res.status(200).json(response);
   } 
   catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal server error'});
   }
  

 })

 //get method to get person
  app.get('/person', async(req, res)=>{
    try{
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
       }
   })

  //query params

//   app.get('/person/:workType', async(req, res)=>{
//     try{
//         const workType = req.params.workType; //extract the worktyoe from url parameter
//         if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
//             const response = await Person.find({work : workType});
//             console.log('reponse fetched');
//             res.status(200).json(response);
//         }
//         else{
//             res.status(404).json({error : 'Invalid work type'});
//         }
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error : 'Internal server error'});
//        }
//   })


//import the router files
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

//const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('listening on port 3000') // server is live now
})

// Async function is a function that is designed to work with asynchronous operations. you can declare a function as async by placing the async keyword before the function declaration. the primary purpose of an async function is to allow you to use the await keyword inside it, which simplifies working with promises and asynchronous code. inside an async function you can use await to pause the execution of function until a promises resolved this makes the code appear more synchronous and easier to read

// the await keyword is used inside an async function to wait for the resolution of the promise. it can only be used within an async function when await is used the function causes at that line until the promises resolved or rejected this allows you to write code that appears sequential even though its performing asynchronous task.

// if the promise is resolved the result of promise is returned. if the
// promise is rejected it throws an error that can be caught using try...catch