//operating systemm

const os = require('os');

//os architecture
console.log(os.arch());

//return amount of free system memory in bytes as an integer
const freeMemory = os.freemem();
//console.log(freeMemory);

//console.log(`${freeMemory/1024/1024/1024}`);

//host name
console.log(os.hostname());
//platform
console.log(os.platform());

//temporary folder
//console.log(os.tmpdir());

//os type
console.log(os.type());

//total memory
const totalMemory = os.totalmem();
///1024/1024/1024 ->> mean bytes to gb

//console.log(`${totalMemory/1024/1024/1024}`);