create database project1;
use project1;

create table users(
id int primary key not null auto_increment,
userName varchar(50) not null,
email varchar(50) not null,
userNum int not null,
image varchar(256) not null
);

select * from users;

create table registered_users(
   id int primary key not null auto_increment,
   first_name varchar(100) not null,
   last_name varchar(100) not null,
   email varchar(256) not null,
   pass varchar(100) not null,
   confirm_pass varchar(100) not null,
   image varchar(100)
);

select * from registered_users;