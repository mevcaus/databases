var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect((err) => {
  if (err) {
    console.log('unable to connect to server ' + err);
  } else {
    console.log('connected to server');
  }
});

module.exports = connection;