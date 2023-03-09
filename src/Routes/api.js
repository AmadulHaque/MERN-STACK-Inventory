const express =require("express");
const router = express.Router();
const  SendEmailUtility = require('../utility/SendEmailUtility');

router.get('/',(req,res)=>{
    // SendEmailUtility('aa@gmail.com','test message','not subject');
    res.send("hello");
});



module.exports =router;