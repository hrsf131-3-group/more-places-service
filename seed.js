const fs = require('fs');
const db = require('./db/index.js')

const images = [
  'https://s3-us-west-1.amazonaws.com/bnb.housing/wm_large.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/Villas_Park_San_Jose_9194.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/Traditional-style-suburban-home-shutterstock_398991412-823eff-1024x546.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/sjm-l-sunnyhomes-0915-1.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/kap_slideshow_1.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/ISm2ws8xojvwbs1000000000.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/image.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/genMid.ML81742197_9.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/genMid.ML81642375_5.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/download.jpg',
  // 'https://s3-us-west-1.amazonaws.com/bnb.housing/B3-DM067_RIGHTS_IM_20190319162958.jpg',
  // 'https://s3-us-west-1.amazonaws.com/bnb.housing/9_f8-32586-39457-04-1160x560.jpg',
  // 'https://s3-us-west-1.amazonaws.com/bnb.housing/5d56f971cd9784745e68feff.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/42028e6856adfefb021f08e5bd09314cl-m4200677605od-w480_h360.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/412785002-0-677x451.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/3406-belgrove-cir-san-jose-ca-95148-0.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/2019_New_Canaan__CT_1119-Idea-House_DSC_0826.0.0.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/1.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/0d4751c8-d5b8-47da-a4f7-766bb6cd70e3_d.jpg',
  'https://s3-us-west-1.amazonaws.com/bnb.housing/000.jpg'
  ]
const type = ['House', 'Hotel', 'Apartment'];
const description = ['Big Bear Loft', 'Double Queen', 'KingSizeBed', 'Near Disneyland']

//will hold an array of objects of each listing
let rawData = [];

//data object creation
let createListing = (id) => {
  return {
    list_id: id,
    image: images[id%20],
    type: `${type[id%3]} ${Math.floor(Math.random()*4 + 1)} Beds`,
    description: description[id%4],
    price: `$${Math.floor(Math.random()*300 + 100)}`,
    numOfReviews: Math.floor(Math.random()*100),
    rating: Math.floor((Math.random()*150 + 350))/100,
    isFavorite: false
  }
}

//seeding to rawData array
seedData = (entries) => {
  let created = 0;
  let listID = 0;

  while (created <= entries) {
    let morePlaces = {
      id: created++,
      listings: []
    }

    for (let i = 0; i < 12; i++) {
      morePlaces.listings.push(createListing(listID++))
    }
    rawData.push(morePlaces);
  }
  // func from db to save seeded data to db
  db.removeThenSeed(rawData);
}


//seeding to rawData array
// seedData = (entries) => {
//   let created = 1;

//   while (created <= entries) {
//     rawData.push(createListing(created++));
//   }
//   // func from db to save seeded data to db
//   db.saveSeedData(rawData);
// }

//saves raw data to db
// saveToDB = () => {
//   for (let i = 0; i < rawData.length; i++) {
//     let toSave = new db.places(rawData[i]);
//     toSave.save();
//   }
// }

seedData(100);