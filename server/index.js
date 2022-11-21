const express = require('express');
// const mongoose = require('mongoose');
const {UserModel} = require('./models').user;
const {mongoose} = require('./models');

const ObjectId = mongoose.Types.ObjectId;

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const options = {useNewUrlParser: true};

const app = express();
const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

// console.log('MONGO = url: ', url);

mongoose.connect(url, options).then(function() {
  console.log('MongoDB is connected');
})
  .catch(function(err) {
  console.log('Mongo connection error: ', err);
});

app.get('/', async (req, res) => {
  const users = await UserModel.find({});
  console.log('users', users);
  res.status(400).send('I am hereee');
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});