const jwt=require('jsonwebtoken');
require('dotenv').config();


exports.generateToken=((req,res)=>{
    const token=jwt.sign({userId: req.body.userId}, process.env.JWT_SECRET, {expiresIn: '1h'});
    res.json({token});
})
// ok