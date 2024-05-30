const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { has } = require('lodash');

//definr person schema
const personSchema = new mongoose.Schema({
   name:{
    type:String,
    required :true // this field is mandatory so true
   },
   age:{
    type:Number,
    required :true
   },
   work:{
    type:String,
    enum :['chef', 'waiter', 'manager'],//it will take only thses three values
    required:true
   },
   mobile:{
    type:String,
    required :true // this field is mandatory so true
   },
   email:{
    type:String,
    required :true, // this field is mandatory so true
    unique:true //different emails
   },
   address:{
    type:String,
   },
  salary:{
    type:Number,
    required :true // this field is mandatory so true
   },
   username:{
      type:String,
      required :true // this field is mandatory so true
     },
     password:{
      type:String,
      required :true // this field is mandatory so true
     } 

});

//bcrypt fxn
personSchema.pre('save', async function(next){
   const person = this;
   //hash the password only if it has been modified (or is new)
   if(!person.isModified('password')) return next();

   try{
  //hash password generation
  const salt = await  bcrypt.genSalt(10);
  //hash password
  const hashPassword = await bcrypt.hash(person.password, salt);
  //override the plain password with hashed one
  person.password = hashPassword;

  next();
   }
   catch(err){
     return next(err);
   }
})

personSchema.methods.comparePassword = async function(candidatePassword){
   try{
   //use bcrypt to compare the provided password with the hashed password
   const isMatch = await bcrypt.compare(candidatePassword, this.password);
   return isMatch;
   }
   catch(err){
      throw err;
   }
}


//create person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;

//what is body parser

// body parser is a middleware library for express.js. it is used to pass an extract the body of incoming http requests. when a client example a web browser or a mobile app send the data to a server it typically includes the data in the body of an http request. this data can be in various formats such as JSON, form data or URL-encoded data. Body parser helps parse and extract this data from the request so that you can work with that in your express.js application

// bodyParser processes the request body before it reaches your route handlers making the parsed data available in the req.body for further processing 

//bodyParser.json() automatically parses the json data from the request body and converts it into a js object, which is then stored in req.body

//express.js uses lots of middleware and to use middleware we use the app.use()