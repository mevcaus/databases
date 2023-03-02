var models = require('../models/messages.js');
module.exports = {
  get: function (req, res) {
    models.getAll((err, message) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.statusCode = 200;
        res.json(message);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var message = req.body.message;
    var roomname = req.body.roomname;
    let username = req.body.username;
    models.create(username, message, roomname, (err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  } // a function which handles posting a message to the database
};


// username = req.body.something