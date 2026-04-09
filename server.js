const express=require('express');
const app=express();

const port=require

const userRoutes=require('./routes/userRoutes');

app.use('/',userRoutes);


// app.listen(3000,()=>{
//     console.log("server is running on port 3000");
// })




require('dotenv').config();
//env ke variables ko use kar sakte hai
// require('./src/db/config');
require('./db/config');


app.use(express.json());



app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})


// $gt
// $lt
// $gte
// $lte
// $eq
// used for comparision in mongodb queries.
// db.users.find({age:{$gt:18}}) 
// this will return all the users whose age is greater than 18.

// inclusion and excludsion
//db.users.find({},{name:1,age:1})   second paramter is projection which is used to include or exclude fields in the result. 1 means include and 0 means exclude.
// this will return all the users with only name and age fields. other fields will be excluded.

// db.users.updateOne({isActive:true},{$set:{isActive:false}})  this will update the first document which has isActive true and set it to false.

// db.users.find({isActive:true})

// db.users.find({isActive:false},{skills:{$in:[" javascript"]}})  
// this will return all the users who have isActive false and have javascript in their skills array. $in operator is used to check if a value is present in an array field.



// db.users.updataOne(
//     {_id:4},
//     {$set:{"marks.$[ele].score":100}}
// )

