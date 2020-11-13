const mongoose = require('mongoose');
const fs = require('fs');

mongoose.connect('mongodb://localhost/fetcher');

let morePlaces = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  image: String,
  description: String,
  price: Number,
  numOfReviews: Number,
  rating: Number,
  isFavorite: Boolean
});

let user_favorites = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  user: String,
  favorites: [
    {
      id: Number,
      description: String
    }
  ]
});

let place = mongoose.model('Place', morePlaces);

