# Database Connection

Databse on Kubernetes can be set up in mostly 2 ways:
    1. Set up the database as a cluster on the kubernetes container.
    2. Set up the databse somewhere else.

# Set up databse somewhere else 

This is the instance where the database is hosted at an external location. Most likely, this option is used to connect new microservice apps to use service Entry;

1. Have a database already set up at desired location by running the .sql set up file. 

2. Obtain the host and ports of the databse. If it is on a linux machine, you can run commands:

`
    $ export MYSQL_DB_HOST=<your MySQL database host>
    $ export MYSQL_DB_PORT=<your MySQL database port>
`

Setup a table if you will, run a table initializer like this: 
`
CREATE DATABASE test;
USE test;

CREATE TABLE `ratings` (
  `ReviewID` INT NOT NULL,
  `Rating` INT,
  PRIMARY KEY (`ReviewID`)
);
INSERT INTO ratings (ReviewID, Rating) VALUES (1, 5);
INSERT INTO ratings (ReviewID, Rating) VALUES (2, 4);
`

Mysql VS NoSQL databse;
S