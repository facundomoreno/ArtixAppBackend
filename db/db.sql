create database users;
use users;

create table  usuarios (

id INT(11) not null auto_increment,
name varchar(45) default null,
mail varchar(50) default null,
primary key(id)

);

describe usuarios;