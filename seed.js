const fs = require('fs')
const faker = require('faker');

const images = ['https://s3-us-west-1.amazonaws.com/bnb.housing/93acd77dfa169f58e6c07fe94d2d8d17.jpg', 'https://s3-us-west-1.amazonaws.com/bnb.housing/download20200902042444.png'];
const description = ['house', 'hotel', 'apartment'];

createRecord = (images, id, last) => {
  let dataStr = '{ \n';
  dataStr += `id: ${id}, \n`;
  dataStr += `image: "${images[id%2]}", \n`;
  dataStr += `description: "${images[id%3]}", \n`;
  dataStr += `price: ${Math.floor(Math.random()*300 + 100)} / night, \n`;
  dataStr += `numOfReviews: ${Math.floor(Math.random()*100)}, \n`;
  dataStr += `rating: ${Math.floor((Math.random()*150 + 350))/100}, \n`;
  dataStr += `isFavorite: false \n`;
  dataStr += '}'
  if(id !== last) {
    dataStr += ', '
  }

  return dataStr += '\n\n';
}

seedData = (entries) => {
  let created = 1;
  let fileText = '[';
  while (created <= entries) {
    fileText += createRecord(images, created, entries);
    created++;
  }
  fileText += ']'

  return new Promise( (resolve, reject) => {
    fs.writeFile('data.txt', fileText, (err, data) => {
      if (err){
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

seedData(3)
  .then(() => {console.log('Data seeded!')})
  .catch(() => {console.log('something went wrong :(')})