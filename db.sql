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