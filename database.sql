ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';
FLUSH PRIVILEGES;
CREATE DATABASE PET_SHOP;

USE PET_SHOP;

CREATE TABLE CLIENT (
  id int unsigned NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  birthday date NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB;

CREATE TABLE PHONE (
  id int unsigned NOT NULL AUTO_INCREMENT,
  type enum('landline', 'mobile') DEFAULT NULL,
  area_code tinyint unsigned NOT NULL,
  id_client int unsigned NOT NULL,
  phone_number bigint unsigned NOT NULL,
  PRIMARY KEY (id),
  KEY FK_CLIENT_PHONE (id_client),
  CONSTRAINT FK_CLIENT_PHONE FOREIGN KEY (id_client) REFERENCES CLIENT (id) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB;

