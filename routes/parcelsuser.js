const router = require('express').Router();
const User = require('../models/Parcels')
const checkAuth = require('../middleware')



router.post('/', checkAuth, async(req,res)=>{
    //Create a new parcel 
        const user = new User({
            name:req.body.name,
            destination:req.body.destination,
            duration:req.body.duration,
            price:req.body.price,
            status:req.body.status,
            present:req.body.present
          
        });
        try{
            const result = await(req.body)
            // console.log('here')
            console.log(result)
            //Getting the parcel and saving
             const savedUser = await user.save();
            res.send(savedUser);
        }catch(err){
            console.log(err)
            // res.status(400).json("Unable to create parcel");
        }
       
    });


   

    
    router.get('users/:parcelid/parcels',checkAuth, async(req, res,) => {
        try{
           const post =  await User.findById({_id: req.params.parcelid});
           res.json(post);
        } catch (err) {
            res.status(500).send("Unable to retrieve items")
        }
        });
    
        
    
        router.patch("/:parcelid/destination",checkAuth, async(req,res)=>{
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
    
    
       
    
       
        router.delete('/:parcelid/cancel', checkAuth,async(req, res,) => {
            try{
               const removedPost =  await User.deleteOne({_id: req.params.parcelid});
               res.json( removedPost);
            } catch (err) {
                res.status(500).send("Unable to remove items")
            }
            });
    
    
 


module.exports = router ;
