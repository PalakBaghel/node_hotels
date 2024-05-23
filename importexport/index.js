//create and export our own module
//relative ./ meaning mai index.js k bahar jakaer dusri file dekh rhi hu
// const add = require('./oper')
// console.log(add(7, 6)); //13
// console.log(sub(6, 6));

//for multiple functions
// const oper = require('./oper')
// console.log(oper);  // this is object
// console.log(oper.add(7, 6)); // add is property
// console.log(oper.sub(6, 6));

//we can also use
//object destructuring
const {add1, sub,mul} = require('./oper')
//console.log(oper);  // this is object
console.log(add1(7, 6)); // add is property
console.log(sub(6, 6));
console.log(mul(4,5));


//const {add1, sub,mul, name} = require('./oper')
//console.log(name);