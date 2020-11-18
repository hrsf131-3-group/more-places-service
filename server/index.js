const express = require('express');
const db = require('../db/index.js')
const app = express();

app.use(express.static(__dirname + '/../client/dist'))

app.get('/api/homes/:id/nearby', (req, res) => {
  db.find( (data) => {
    res.json(data);
  })
})

let port = 1128;

app.listen(port, () => {
  console.log(`listening on http://127.0.0.1:${port}`);
  console.log(`Database GET at http://127.0.0.1:${port}/api/homes/:id/nearby`)
});