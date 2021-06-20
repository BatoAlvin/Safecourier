const router = require('express').Router();
const bcrypt = require('bcryptjs')
const User = require('../models/User')
// const {authSchema} = require("../helpers/validation_schema")

router.post("/", async (req, res, next) => {
try {
    const foundUser =  await User.findOne({ email: req.body.email })
    console.log('user found')
    if (foundUser != null){
        return res.status(400).send('Email already exists');
    }
    //Hash password
    const newUser = new User(req.body)
   const salt = await bcrypt.genSalt(10);
   newUser.password = await bcrypt.hash(req.body.pass, salt);
   const savedUser = await newUser.save();
   if(savedUser){
       return res.status(201).send('User created')
   }
} catch (error) {
    // res.status(500).send('Post Unsucessful')
    console.log(error)
}

})



module.exports = router;
