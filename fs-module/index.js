// const fs=require('fs');

// fs.writeFileSync('./public/hello1.txt','hey');

// fs.readFile('./public/hello1.txt','utf-8',(err,data)=>{
//     console.log(data);
// })

// fs.appendFileSync('./public/hello1.txt',' how are you?');

// // fs.unlinkSync('./public/hello1.txt');
// fs.renameSync('./public/hello2.txt','./public/hello1.txt');

const fs=require('fs');

fs.writeFileSync('./public/index1.txt','good morning');

fs.readFile('./public/index1.txt','utf-8',(err,data)=>{
    console.log(data);
})

fs.appendFileSync('./public/index1.txt',' have a nice day');

fs.renameSync('./public/index1.txt','./public/index2.txt');
