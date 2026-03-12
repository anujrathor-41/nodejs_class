const users=require('../modules/userModules');

exports.getUsers=(req,res)=>{
    res.json(users);
}