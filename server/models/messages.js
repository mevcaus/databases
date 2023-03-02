var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // query database
    db.query('SELECT * FROM messages', (err, messages) => {
      if (err) {
        callback(err);
      } else {
        callback(null, messages);
      }
    });
    // first arg: the query SELECT *
    // second argument callback
    // if err throw err
    // else do the getall call back on the data
  }, // a function which produces all the messages
  create: function (username, message, roomname, callback) {
    console.log(message);
    db.query('INSERT INTO messages (id_user, body, roomname) VALUES ((SELECT id FROM user WHERE username = ? LIMIT 1), ?, ?)', [username, message, roomname], (err, result) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        console.log('this is my result: \n' + result);
        callback(null, result);
      }
    });
  } // a function which can be used to insert a message into the database
};