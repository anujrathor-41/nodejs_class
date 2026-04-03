const express=require('express');
const app=express();

const port=require

const userRoutes=require('./routes/userRoutes');

app.use('/',userRoutes);


app.listen(3000,()=>{
    console.log("server is running on port 3000");
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