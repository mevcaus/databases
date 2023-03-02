DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE user (
  /* Describe your table here.*/
  id int NOT NULL,
  username VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE room (
  /* Describe your table here.*/
  id int NOT NULL,
  room VARCHAR(10) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL,
  id_user int,
  body VARCHAR(140) NOT NULL,
  id_room int,
  PRIMARY KEY (id),
  FOREIGN KEY (id_user) REFERENCES user(id),
  FOREIGN KEY (id_room) REFERENCES room(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

