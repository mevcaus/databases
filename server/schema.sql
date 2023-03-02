DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE user (
  id int NOT NULL AUTO_INCREMENT,
  username VARCHAR(10) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  id_user int,
  body VARCHAR(140) NOT NULL,
  roomname VARCHAR(100) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (id_user) REFERENCES user(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

