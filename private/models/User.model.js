const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema
({
    UserName: { type: String, required: true, min: 4, max: 26 },
    Email: {type: String, required: true, min: 4, max: 28 },
    Password: { type: String, required: true, min: 7, max: 16 },

    FirstName: { type: String, required: true, min: 1, max: 16 },
    LastName: { type: String, required: true, min: 1, max: 16 },
    Sex: { type: String, required: true, min: 3, max: 9 },
    Company: { type: String, required: true, min: 3, max: 20 },
    Height: { type: Number, required: true, min: 1, max: 3 },
    BloodType: { type: String, required: true, min: 4, max: 12 },
    PhoneNumber: { type: String, required: true, min: 11, max: 15 },
    Address: { type: String, required: true, min: 4, max: 24 },
    AddressTwo: { type: String, required: true, min: 3, max: 10 }
});

const User = mongoose.model('Users', UserSchema);
module.exports = User;