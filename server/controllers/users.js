var models = require('../models/users.js');
module.exports = {
  get: function (req, res) {

    models.getAll((err, users) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.statusCode = 200;
        res.json(users);
      }
    });
  },
  post: function (req, res) {
    var username = req.body.username;
    console.log(username);
    models.create(username, (err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  }
};

