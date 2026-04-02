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