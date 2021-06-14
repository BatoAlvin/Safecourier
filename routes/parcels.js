const router = require('express').Router();
const User = require('../models/Parcels')
const checkAuth = require('../middleware')


     //Fetches all parcels
     router.get('/',checkAuth, async (req,res) =>{
        try{
            const answerss = await User.find()
            return res.status(200).json(answerss)
        } catch (error) {
            return res.status(500).json({"error":error})
        }
    })

 

    router.patch("/:parcelid/status",checkAuth, async(req,res)=>{
        try {
            const id = req.params.parcelid;
            const updates = req.body;
            const options = { new: true };
            const result = await User
            .findByIdAndUpdate(id,updates,options);
            res.send(result);
        } catch (error) {
            console.log(error.message);
        }
    });

    router.patch("/:parcelid/presentLocation",checkAuth, async(req,res)=>{
        try {
            const id = req.params.parcelid;
            const updates = req.body;
            const options = { new: true };
            const result = await User
            .findByIdAndUpdate(id,updates,options);
            res.send(result);
        } catch (error) {
            console.log(error.message);
        }
    });



module.exports = router ;
