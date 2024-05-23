//nodejs hs built in  module called events

//where you can create- , fire-, and listen for- your own events

///registering for the event to be fired only one time using once eg1

//create an event emitter instance and register a couple of call backs eg2

//registering for the event with callback parameters eg3

//create class
      
const EventEmitter = require("events");
//create new instance or object
const event = new EventEmitter();

//kya kru event create krne k baad
        //event ka naam, callback
        //listen event
event.on('saymyname', ()=>{
    console.log('Palak Baghel')
});
event.on('saymyname', ()=>{
    console.log('Palak Baghel hi')
});
event.on('saymyname', ()=>{
    console.log('Palak Baghel bye')
});
//create event
event.emit("saymyname");

//emitter object emit named event that cause previously regustered listeners to be called 
//so an emitter object basically has two main features
//emitting name events
//registering and unregistering listener functions


//we can call mutliple listeners

//eg3
//in simple language function define
event.on('checkpage', (sc, msg)=>{
 console.log(`status is ${sc} and page is ${msg}`);
});
//function call in simple language
event.emit("checkpage", 200, "ok");
