const add  = (a, b) =>{
    return a+b;
}

const sub  = (a, b) =>{
    return a-b;
}
const mul  = (a, b) =>{
    return a*b;
}


//anyone can access add function in other files
//module.exports = add;


//we cannot write two modules like this 
// it will use last module of this file like here it is sub
//and do sub in index.js files for first consloe.log in which add is called
//console.log(add(7, 6)); this will give 1 output and console.log(sub(6, 6)); it will give error
//
// module.exports = add;
// module.exports = sub;


//when use multiple functions
 module.exports.add1 = add;  // equal to k baad same name hona chaiye function jaisa 
 module.exports.sub = sub;
 module.exports.mul = mul;
            //mul ki jagag kuch bhi likh do equal to k phele but equal to k baad sam name hona chaiye function jaisa
 
   //one other way
 //module.exports = {add, sub, mul};

 //for varialbe
//const name = "palak"
 //module.exports = {add, sub, mul, name};
 //we can also passs variable also 

 
//changr directory cd .\importexport\