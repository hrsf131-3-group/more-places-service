const mongoose = require('mongoose');
const fs = require('fs');
const faker = require('faker');
// const seed = require('../seed.js');

mongoose.connect('mongodb://localhost/morePlaces');

/* ----------------- schema for listings ----------------- */
let morePlacesSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  image: String,
  description: String,
  price: String,
  numOfReviews: Number,
  rating: Number,
  isFavorite: Boolean
});

/* ----------------- schema for favorites list WIP----------------- */
// let user_favorites = new mongoose.Schema({
//   id: {
//     type: Number,
//     unique: true
//   },
//   user: String,
//   favorites: [
//     {
//       id: Number,
//       description: String
//     }
//   ]
// });

/* -----------------Seeding to database ----------------- */

const places = mongoose.model('places', morePlacesSchema);

let saveSeedData = (listings) => {
  //clears data in collection prior to reseeding
  places.remove({}, (err) => {
    if (err) {
      console.error('ERROR CLEARING DATABASE', err);
    } else {
      console.log('Database cleared prior to seeding');
    }
  })

  //inserts all seeded data to database
  places.insertMany(listings, {ordered: false}, (err, result) => {
    if (err) {
      console.error('THERE\'S AN ERROR IN MONGO', err);
    } else {
      console.log('SEEDED TO DATABASE!');
    }
  })
}

//query func
let find = (callback) => {
  places.find({}).exec( (err, res) => {
    if (err) {
      return console.error(err);
    }
    callback(res);
  })
}

module.exports.find = find;
module.exports.saveSeedData = saveSeedData;