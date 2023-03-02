var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // query database
    db.query('SELECT * FROM user', (err, users) => {
      if (err) {
        callback(err);
      } else {
        callback(null, users);
      }
    });
  },

  create: function (user, callback) {
    db.query(`INSERT INTO user (username) VALUES ("${user}")`, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }
};
