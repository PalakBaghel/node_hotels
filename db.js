// in db.js file you first import the mongoose library and define the URL to your MongoDB database the URL typically follows the format
// mongodb://<hostname>:<port>/<databaseName>.
// in your code you set the URL to mongobd://localhost:27017/mydatabase.
//where mydatabase is name of your mongodb db.

// set up the MongoDB connection :next you call mongoose.connect() to establish a connection to the MongoDB database using the URL and the some configuration option (userNewURLparser,  userunifiedtopology, etc). this step initialises the connection process but does not actually connect at this point.

// access the default connection object : mongoose maintain a default connection object representing the MongoDB connection you retrieve this object using mongoose.connection and you have stored it in the variable db this object is what you will use to handle events and interact with the database

// define event listeners : you define event listener for the database connection using the method like .on ('connected',...), .on('error',.. )and .on('disconnected',...) these event listener allow you to react to different states of the database connection.

// start listening for events : the code is set up to listen for events when you call mongoose.connect() mongoose start the connection process if the connection is successful the connected event is triggered and you log a message indicating that you are connected to MongoDB. if there an error during the connection process the "error "event is triggered and you log an error message. similarly the "disconnected" event can be useful for handling situation where the connection is lost.

// export the database connection : finally you export the DB object which represent the MongoDB connection so that you can import and use it in the other parts of your node JS application

// to sum it up the DB.JS file act as a central module that manages the connection to your MongoDB database using mongoose it set up the connection handles connection events and exports the connection object so that your Express.JS server (or other parts of your application) can use it to interact with the database when your server runs it typically requires or imports this db.JS file to establish the database connection before handling http requests.

const mongoose = require('mongoose');
require('dotenv').config();


//define the mongoDB connection URL
//const mongoURL = 'mongodb://localhost:27017/hotels'
//const mongoURL = 'mongodb+srv://palakbaghel09:Palak9340766@cluster0.f5phv2e.mongodb.net/'
//const mongoURL = process.env.MONGODB_URL;
const mongoURL =  process.env.MONGODB_LOCAL_URL;

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology : true
})

//get the default connection
//mongoose maintains a default connection object representiong the mongoDB connection
const db = mongoose.connection;

//definr event listeners for database connection

db.on('connected', ()=>{
    console.log('connected to mongoDB server');

});

db.on('error', (err)=>{
    console.log('mongoDB connection error', err);
    
});

db.on('disconnected', ()=>{
    console.log('mongoDB connetion disconnected');
    
});
//export the database connection
module.exports = db;
