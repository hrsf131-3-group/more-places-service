const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  id: {
    type: Number,
    unique: true
  },
  repo_name: String,
  username: String,
  url: String,
  numForks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // let newRepos = [];

  for (let i = 0; i < repos.length; i++) {
    let repo = repos[i];

    let savingRepo = new Repo({
      id: repo.id,
      repo_name: repo.name,
      username: repo.owner.login,
      url: repo.html_url,
      numForks: repo.forks
    })

    // newRepos.push(savingRepo);

    savingRepo.save( (err, savingRepo) => {
      if (err) {
        console.error(err);
      } else {
        console.log('repos added!!!!!');
      }
    });
  }
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

let find = (callback) =>{
  Repo.find({}).limit(25).sort({forks: -1}).exec( (err, res) => {
    if (err) {
      return console.error(err);
    }
    callback(res);
  });
}

module.exports.save = save;
module.exports.find = find;