'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {type: String, trim: true, required: true},
  location: {type: String, trim: true, required: true},
});

/** @type Model<UserModel> */
const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
