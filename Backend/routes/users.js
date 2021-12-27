const router = require("express").Router();
const Pin = require("../models/Pin");
const { route } = require("./pins");

//register
route.post("/register", async(req,res)=>{
    try{
        //generate new password

        //create new user

        //save user and send response
    }catch(err){
        res.status(500).json(err)
    }
})


//login

module.exports = router