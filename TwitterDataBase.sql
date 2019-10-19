CREATE DATABASE TWITTER;

USE TWITTER;

CREATE TABLE TWEET (
	id int unsigned NOT NULL AUTO_INCREMENT,
	nomeEmpresa varchar(30) NOT NULL,
	evento varchar(50) NOT NULL,
    dataEvento date NOT NULL,
    horaEvento varchar(5) not null,
    descricao varchar(50) not null,
	PRIMARY KEY (id)
) ENGINE=InnoDB;
select * from tweet;
select * from pessoas_tweet;

CREATE TABLE Pessoas_Tweet(
	id int unsigned NOT NULL AUTO_INCREMENT,
    id_tweet int unsigned NOT NULL,
    nome varchar(20) NOT NULL,
    PRIMARY KEY(id),
    KEY FK_TWEET (id_tweet),
	CONSTRAINT FK_TWEET FOREIGN KEY (id_tweet) REFERENCES TWEET (id) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB;

truncate table tweet;
truncate table pessoas_tweet;