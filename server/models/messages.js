var { User, Message } = require('../db');

module.exports = {
  getAll: function (callback) {
    Message.sync();

    Message.findAll()
      .then(messages => {
        callback(null, messages);
      })
      .catch(err => {
        callback(err);
      });
  }, // a function which produces all the messages
  create: function (usernamex, message, roomnamex, callback) {
    Message.sync();
    User.findOne({
      where: {
        username: usernamex
      }
    })
      .then(user => {
        Message.create({
          id_user: user.dataValues.id,
          body: `${message}`,
          roomname: `${roomnamex}`
        })
          .then(finish => {
            console.log('finish here');
            callback(null, finish);
          })
          .catch(err => {
            console.log(err);
            callback(err);
          });
      })
      .catch(err => {
        console.log('err within user.findone')
        callback(err);
      });

  } // a function which can be used to insert a message into the database
};