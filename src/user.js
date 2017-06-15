const mongoose = require('mongoose');
const Schema = require('mongoose.Schema');

const UserSchema = new Schema({
    name: String
});

const User = mongoose.model('user', UserSchema);

module.exports = User;