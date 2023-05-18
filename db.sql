use project1;
create table registered_users(
   id int primary key not null auto_increment,
   first_name varchar(100) not null,
   last_name varchar(100) not null,
   email varchar(256) not null,
   pass varchar(100) not null,
   image varchar(100)
);
select * from registered_users;



