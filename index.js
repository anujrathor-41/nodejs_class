// console.log('first');
// setTimeout(()=>{
//     console.log("mid"),
//     5000
// })
// console.log("end");

// import  add ,{sub} from './add.js';
// import fs from 'fs';


// const output=add(5,10);
// console.log(output);

// fs.readFile('notes.txt','utf8',(err,data)=>{
//     if(err){
//         // console.log("error",err);
//         return;

//     }
//     console.log("data",data);
// })



// os module
// import os from 'os';

// console.log(os.platform());

// common js 
const func=require('./add.js');

console.log(func.add(5,10));
console.log(func.sub(5,10));


//using destructuring
// const {add,sub}=require('./add.js');
// console.log(add(5,10));
