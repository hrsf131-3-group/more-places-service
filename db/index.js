const mongoose = require('mongoose');
const fs = require('fs');
const faker = require('faker');

mongoose.connect('mongodb://localhost/morePlaces')
  .catch( err => console.error(err) );

/* ----------------- schema for listings ----------------- */
// let morePlaces = new mongoose.Schema({
//   id: {
//     type: Number,
//     unique: true
//   },
//   listings: [{
//     list_id: Number,
//     image: String,
//     type: String,
//     description: String,
//     price: String,
//     numOfReviews: Number,
//     rating: Number,
//     superHost: Boolean,
//     isFavorite: Boolean
//   }]
// });

let morePlaces = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
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

const places = mongoose.model('places', morePlaces);

let saveSeedData = (listings) => {
  //clears data in collection prior to reseeding
  places.remove({}, (err) => {
    if (err) {
      console.error('ERROR CLEARING DATABASE', err);
    } else {
      console.log('Database cleared prior to seeding');

      // inserts all seeded data to database
      places.insertMany(listings, {ordered: false}, (err, result) => {
        if (err) {
          console.error('\nTHERE\'S AN ERROR IN MONGO\n\n', err);
        } else {
          // console.log(listings)
          console.log('SEEDED TO DATABASE!');
        }
      })
      // for (let i = 0; i < listings.length; i++) {
      //   let toSave = new places(listings[i]);
      //   toSave.save();
      // }
      // console.log('SEEDED TO DATABASE!');
    }
  })
}

//query func
const find = (callback) => {
  places.find({}).exec( (err, res) => {
    if (err) {
      return console.error(err);
    }
    callback(res);
  })
}

const create = (lsiting, callback) => {
  places.create(listing, callback);
}
module.exports.find = find;
module.exports.places = places;
module.exports.saveSeedData = saveSeedData;