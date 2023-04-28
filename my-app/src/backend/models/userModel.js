const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema for User database
const userSchema = new Schema({
    fname: String,
    lname: String,
    phone_number: String,
    email: String,
    address: String,
    postcode: String,
    state: String,
    description: String,
    budget: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;


