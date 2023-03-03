var { User } = require('../db');

module.exports = {
  getAll: function (callback) {
    // query database
    User.sync();
    User.findAll()
      .then(users => {
        callback(null, users);
      })
      .catch(err => {
        callback(err);
      });
  },

  create: function (user, callback) {
    User.sync();
    User.create({
      username: user
    })
      .then(finish => {
        callback(null, finish);
      })
      .catch(err => {
        callback(err);
      });
  }
};
