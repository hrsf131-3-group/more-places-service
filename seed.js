const fs = require('fs');
const db = require('./db/index.js')

const images = ['https://s3-us-west-1.amazonaws.com/bnb.housing/93acd77dfa169f58e6c07fe94d2d8d17.jpg', 'https://s3-us-west-1.amazonaws.com/bnb.housing/download20200902042444.png'];
const type = ['House', 'Hotel', 'Apartment'];
const description = ['Big Bear Loft', 'Double Queen', 'KingSizeBed', 'Near Disneyland']

//will hold an array of objects of each listing
let rawData = [];

//data object creation
let createListing = (id) => {
  return {
    id: id,
    image: images[id%2],
    type: `${type[id%3]} ${Math.floor(Math.random()*4 + 1)} Beds`,
    description: description[id%4],
    price: `$${Math.floor(Math.random()*300 + 100)} / night`,
    numOfReviews: Math.floor(Math.random()*100),
    rating: Math.floor((Math.random()*150 + 350))/100,
    isFavorite: false
  }
}

//seeding to rawData array
seedData = (entries) => {
  let created = 1;
  let listID = 1;

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
  console.log(JSON.stringify(rawData))
  db.saveSeedData(rawData);
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

seedData(1);

/*----------------- Rob's seed tutorial -----------------*/

// createRecord = (images, id, last) => {
//   let dataStr = '  {\n';
//   dataStr += `    id: ${id}, \n`;
//   dataStr += `    image: "${images[id%2]}", \n`;
//   dataStr += `    description: "${images[id%3]}", \n`;
//   dataStr += `    price: ${Math.floor(Math.random()*300 + 100)} / night, \n`;
//   dataStr += `    numOfReviews: ${Math.floor(Math.random()*100)}, \n`;
//   dataStr += `    rating: ${Math.floor((Math.random()*150 + 350))/100}, \n`;
//   dataStr += `    isFavorite: false \n`;
//   dataStr += '  }'
//   if(id !== last) {
//     dataStr += ','
//   }

//   return dataStr += '\n';
// }

// seedData = (entries) => {
//   let created = 1;
//   let fileText = '[\n';
//   while (created <= entries) {
//     fileText += createRecord(images, created, entries);
//     created++;
//   }
//   fileText += ']'

//   return new Promise( (resolve, reject) => {
//     fs.writeFile('data.txt', fileText, (err, data) => {
//       if (err){
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }

// seedData(100)
//   .then(() => {console.log('Data seeded!')})
//   .catch(() => {console.log('something went wrong :(')})