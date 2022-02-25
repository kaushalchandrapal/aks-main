-- CREATE DATABASE aks-main;

create table contactbook1(
	id integer NOT NULL DEFAULT nextval('"contactbook_seq"'::regclass),
    fname varchar(50) NOT NULL,
    lname varchar(50) NOT NULL,
    phone varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    address varchar(50) NOT NULL,
    postalcode varchar(50) NOT NULL,
    city varchar(50) NOT NULL,
    statename varchar(50) NOT NULL,
    country varchar(50) NOT NULL,
    gender varchar(50) NOT NULL,
    dob varchar(50) NOT NULL,
    jobrole varchar(50) NOT NULL,
    company varchar(50) NOT NULL,
	constraint contactbook_cons PRIMARY KEY(id)
);