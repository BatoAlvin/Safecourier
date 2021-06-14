const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;


//Connect to the db
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true , useFindAndModify: false},
     ()=> console.log('connected to db')
     );

     app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Headers', " Origin, X-Requested-With, Content-Type, Accept, Authorization");
        if (req.method === "OPTIONS") {
            res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
            return res.status(200).json({});
        }
        next();
    })

const registerroutes = require('./routes/register');
app.use('/api/v1/auth/signup',registerroutes);

const loginroutes = require('./routes/login');
app.use('/api/v1/auth/login',loginroutes);

//Creating admin parcels and viewing them
const parcels = require('./routes/parcels');
app.use('/api/v1/parcels',parcels);

//Route for users
const parcelsuser = require('./routes/parcelsuser');
app.use('/api/v1/parcels/users',parcelsuser);



app.listen(port,()=>{
    console.log(`Server running`)
});