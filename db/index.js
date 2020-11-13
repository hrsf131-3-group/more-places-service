const mongoose = require('mongoose');
const fs = require('fs');
const faker = require('faker');

mongoose.connect('mongodb://localhost/morePlaces');

/* ----------------- schema for listings ----------------- */
let morePlaces = new mongoose.Schema({
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

const images = ['https://s3-us-west-1.amazonaws.com/bnb.housing/93acd77dfa169f58e6c07fe94d2d8d17.jpg', 'https://s3-us-west-1.amazonaws.com/bnb.housing/download20200902042444.png'];
const description = ['house', 'hotel', 'apartment'];

const Listing = mongoose.model('Listing', morePlaces);

let rawData = [];

let createListing = (id) => {
  return {
    id: id,
    image: images[id%2],
    description: description[id%3],
    price: `${Math.floor(Math.random()*300 + 100)} / night`,
    numOfReviews: Math.floor(Math.random()*100),
    rating: Math.floor((Math.random()*150 + 350))/100,
    isFavorite: false
  }
}

seedData = (entries) => {
  let created = 1;

  while (created <= entries) {
    rawData.push(createListing(created));
    created++;
  }

  Listing.insertMany(rawData, {ordered: false}, (err, result) => {
    if (err) {
      console.error('THERE\'S AN ERROR IN MONGO', err);
    } else {
      console.log('SAVED TO DATABASE!')
    }
  })
}

seedData(3);