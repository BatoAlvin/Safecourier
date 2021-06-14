const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 4,
        max: 14
    },

    email: {
        type: String,
  required: true
    },

    password: {
        type: String,
        min: 2,
        max: 14
    },
    date: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,

    },
});


module.exports = mongoose.model('User', userSchema);

