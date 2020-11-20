const mongoose = require('mongoose');
const fs = require('fs');
const faker = require('faker');

mongoose.connect('mongodb://localhost/morePlaces')
  .catch( err => console.error(err) );

/* ----------------- schema for listings ----------------- */
const ListingsSchema = new mongoose.Schema({
  list_id: Number,
  image: String,
  type: String,
  description: String,
  price: String,
  numOfReviews: Number,
  rating: Number,
  superHost: Boolean,
  isFavorite: Boolean
});

const MorePlacesSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  listings: [ListingsSchema]
});



/* -----------------Seeding to database ----------------- */

const places = mongoose.model('places', MorePlacesSchema);

const removeThenSeed = (listings) => {
  //clears data in collection prior to reseeding
  places.remove({}, (err) => {
    if (err) {
      console.error('ERROR CLEARING DATABASE', err);
    } else {
      console.log('Database cleared prior to seeding');
      saveSeed(listings);
    }
  })
}

const saveSeed = (listings) => {
  // inserts all seeded data to database
  places.insertMany(listings, {ordered: false, rawResult: false}, (err, result) => {
    if (err) {
      console.error('\nTHERE\'S AN ERROR IN MONGO\n\n', err);
    } else {
      console.log('SEEDED TO DATABASE!');
    }
  })
}

//query func
const find = (callback) => {
  places.find({}).exec( (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  })
}

module.exports.find = find;
module.exports.places = places;
module.exports.removeThenSeed = removeThenSeed;