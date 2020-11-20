const express = require('express');
const db = require('../db/index.js')
const app = express();
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'))
app.use(bodyParser.json());


app.get('/api/homes/:id/nearby', (req, res) => {
  db.find( (err, listings) => {
    if (err) {
      res.status(404);
      console.log('ERROR IN SERVER', err);
    } else {
      res.json(listings);
    }
  })
})

let port = 1128;

app.listen(port, () => {
  console.log(`listening on http://127.0.0.1:${port}`);
  console.log(`Database GET at http://127.0.0.1:${port}/api/homes/:id/nearby`)
});