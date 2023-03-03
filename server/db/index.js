var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'
const User = db.define('User', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING(100),
    allowNull: false
  }
});

const Message = db.define('Message', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  id_user: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    }
  },
  body: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  roomname: {
    type: Sequelize.STRING,
    allowNull: false,
  },


}, {timestamps: false});



module.exports = {
  db,
  User,
  Message
};