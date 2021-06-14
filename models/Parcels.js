const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
   
    name: {
        type: String,
    },
   
    destination: {
        type: String,
    },
    duration: {
        type: String,
    },
    price: {
        type: String,
    },
    status: {
        type: String,
    },
    present: {
        type: String,
    },

});


module.exports = mongoose.model('Parcels', userSchema);