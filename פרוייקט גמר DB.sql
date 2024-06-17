-- create database mySql_Project;
/* Create the database */
CREATE DATABASE  IF NOT EXISTS mySql_Project;

/* Switch to the classicmodels database */
USE mySql_project;

/*DROP existing tables */


DROP TABLE IF EXISTS passwords;
DROP TABLE IF EXISTS accessoriesInOrder;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS dresses;
DROP TABLE IF EXISTS clients;
DROP TABLE IF EXISTS accessories;
DROP TABLE IF EXISTS queues;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS queueTypes;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS disabledQueues;
DROP TABLE IF EXISTS gallery;

/* Create the tables */
CREATE TABLE roles(
      id INT auto_increment PRIMARY KEY,
      type  varchar(12) NOT NULL
);

CREATE TABLE users(
      id INT auto_increment PRIMARY KEY,
      userId varchar(20),
      name varchar(20) NOT NULL,
      email varchar(25) NOT NULL,
      phone1 varchar(10) NOT NULL,
      phone2 varchar(10) ,
      roleId int NOT NULL,
	FOREIGN KEY (roleId) REFERENCES roles (id)
);

CREATE TABLE clients(
      id INT auto_increment PRIMARY KEY,
      userId int NOT NULL,
      weddingDate date,
      dressStyle varchar(30) ,
      remarks varchar(30),
	  FOREIGN KEY (userId) REFERENCES users (id)
);

CREATE TABLE  passwords (
id  int auto_increment PRIMARY KEY,
  userId int,
  password varchar(8) ,
  FOREIGN KEY (userId) REFERENCES users (id)
);
CREATE TABLE queueTypes(
	id  int auto_increment PRIMARY KEY,
	type varchar(25) NOT NULL
);
CREATE TABLE queues(
      id INT auto_increment PRIMARY KEY,
      date DATE,
      hour int NOT NULL,
      minutes int NOT NULL, 
      userId int NOT NULL,
      typeId int NOT NULL,
      FOREIGN KEY(userId) REFERENCES users(id),
      FOREIGN KEY(typeId) REFERENCES queueTypes(id)
);

CREATE TABLE disabledQueues(
      id INT auto_increment PRIMARY KEY,
      date DATE,
      hour varchar(20) NOT NULL
);
CREATE TABLE  dresses (
  id   INT auto_increment PRIMARY KEY,
  model varchar(30) ,
  price double,
  uses int NOT NULL,
  advancePayment int NOT NULL
);

CREATE TABLE accessories(
	id   INT auto_increment PRIMARY KEY,
	type varchar(25) NOT NULL
);

CREATE TABLE orders(
      id INT auto_increment PRIMARY KEY,
      date DATE,
      returnDate date,
      clientId int not NULL,
      dressId INT NOT NULL,
      repairs varchar(100) NOT NULL,
      paidInAdvance bool,
	  FOREIGN KEY(dressId) REFERENCES dresses(id),
      FOREIGN KEY(clientId) REFERENCES clients(id)
);

CREATE TABLE accessoriesInOrder(
      id INT auto_increment PRIMARY KEY,
	  orderId int NOT NULL,
	  accessoryId int NOT NULL,
	  FOREIGN KEY(orderId) REFERENCES orders(id),
      FOREIGN KEY(accessoryId) REFERENCES accessories(id)
);
CREATE TABLE  gallery (
  id INT  auto_increment PRIMARY KEY,
  imageUrl varchar(200)
);
/* Inserting data  */
INSERT INTO roles (type)
VALUES 
('מנהלת'),
('לקוחה'),
('עובדת');

INSERT INTO users (userId, name, email, phone1, phone2  ,roleId)
VALUES 
('54645776' ,'שרה', 'sara@example.com', '0501234567', '0549876543', 2),
( '5675675','רבקה', 'rachel@example.com', '0521112233', '0509998877', 2),
( '6756756', 'לאה', 'leah@example.com', '0548887766', '0527778899', 2),
( '2584156', 'אורית', 'o@example.com', '0548841766', '0520878899', 1);

INSERT INTO clients(userId, weddingDate, dressStyle, remarks)
VALUES
(1,'2024-05-30', 'קלאסי', 'חברות'),
(2,'2024-05-31', 'מודרני', 'אחות '),
(3,'2024-06-01', 'רומנטי', 'אתר');
INSERT INTO passwords (userId, password) VALUES
(1, 987654),
(2, 987654),
(3, 456789),
(4, 123456);
INSERT INTO queueTypes (type) 
VALUES 
('מדידות'),
('התרשמות');
INSERT INTO queues (date, hour,minutes, userId, typeId) 
VALUES 
('2024-05-30', 10, 0, 1, 1),
('2024-07-02', 13, 45, 1, 1),
('2024-05-31', 11, 30, 2, 1),
('2024-06-01', 13, 30, 3, 2);

INSERT INTO accessories (id, type) 
VALUES 
(1, 'תכשיטים'),
(2, 'שיער'),
(3, 'הינומה קצרה');

INSERT INTO dresses ( model, price, uses,advancePayment) 
VALUES 
('בלרינה', 5000, 0,1500),
('קוציטה', 4500, 0,1350),
( 'לובינה', 3500, 0,1050);

INSERT INTO orders (date, returnDate, clientId,dressId,repairs,paidInAdvance )
VALUES 
('2024-05-30','2024-06-30',1,1, 'לקצר את השמלה', true),
('2024-05-30',  '2024-06-30', 2,2,'להאריך את השמלה', false),
('2024-05-30', '2024-06-30', 3,3,'להצר את השמלה', true);

INSERT INTO accessoriesInOrder (orderId, accessoryId) 
VALUES 
(1, 1),
(1, 2),
(1, 3);
INSERT INTO gallery (imageUrl) 
VALUES 
('https://via.placeholder.com/150/92c952'),
('https://via.placeholder.com/150/92c952'),
('https://via.placeholder.com/150/92c952'),
('https://via.placeholder.com/150/92c952'),
('https://via.placeholder.com/150/92c952');
SELECT date, hour, minutes, name, type FROM queues q1, users u, queueTypes q2 WHERE u.id=q1.userId and q2.id=q1.typeId;
SELECT date, hour, minutes, name, phone1, phone2, email, weddingDate, type FROM queues q1, users u, clients c, queueTypes q2 WHERE q1.id=1 and u.id=q1.userId and q2.id=q1.typeId and c.userId=u.id;
SELECT * FROM queuetypes;
SELECT date, hour, minutes, type FROM queues q1, queueTypes q2 WHERE q2.id=1 and q1.userId=1;
SELECT date, hour, minutes, name, type, dressStyle FROM queues q1, users u, queueTypes q2, clients c WHERE u.id=q1.userId and q2.id=q1.typeId and c.userId=u.id;
SELECT type FROM accessories a1, accessoriesInOrder a2 WHERE a2.accessoryId=a1.id and  a2.orderId=1;
   SELECT 
                o.id, 
                u.userId, 
                u.name, 
                u.phone1, 
                u.phone2, 
                u.email, 
                c.weddingDate, 
                o.returnDate, 
                d.model, 
                o.repairs, 
                GROUP_CONCAT(a.type SEPARATOR ', ') AS accessories
            FROM 
                orders o
            JOIN 
                clients c ON o.clientId = c.id
            JOIN 
                users u ON c.userId = u.id
            JOIN 
                dresses d ON o.dressId = d.id
            LEFT JOIN 
                accessoriesInOrder aio ON o.id = aio.orderId
            LEFT JOIN 
                accessories a ON aio.accessoryId = a.id
            WHERE 
                o.id =1