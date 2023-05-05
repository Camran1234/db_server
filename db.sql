DROP DATABASE IF EXISTS `db_redes`;
CREATE SCHEMA IF NOT EXISTS `db_redes` DEFAULT CHARACTER SET utf8 ;
USE `db_redes` ;

CREATE TABLE IF NOT EXISTS `db_redes`.`admin` (
  `idAdmin` INT NOT NULL AUTO_INCREMENT,
  `puesto` VARCHAR(250) NOT NULL,
  `descripcion` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`idAdmin`))
  ;

CREATE TABLE IF NOT EXISTS `db_redes`.`desarrollador` (
    `idDesarrollador` INT NOT NULL AUTO_INCREMENT,
    `puesto` VARCHAR(200) NOT NULL,
    `nombre` VARCHAR(250) NOT NULL,
    `carnet` VARCHAR(30) NOT NULL,
    `curso` VARCHAR(100) NOT NULL,
    PRIMARY KEY(`idDesarrollador`))
    ;

CREATE TABLE IF NOT EXISTS `db_redes`.`moneda` (
    `idMoneda` INT NOT NULL AUTO_INCREMENT,
    `moneda` VARCHAR(200) NOT NULL,
    `valor` INT NOT NULL,
    PRIMARY KEY(`idMoneda`))
    ;

CREATE TABLE IF NOT EXISTS `db_redes`.`departamento` (
    `idDepartamento` INT NOT NULL AUTO_INCREMENT,
    `funcion` VARCHAR(200) NOT NULL,
    `descripcion` TEXT NOT NULL,
    PRIMARY KEY(`idDepartamento`))
    ;

CREATE TABLE IF NOT EXISTS `db_redes`.`noticia` (
    `idNoticia` INT NOT NULL AUTO_INCREMENT,
    `descripcion` TEXT NOT NULL,
    PRIMARY KEY(`idNoticia`))
    ;

INSERT INTO admin 
    (puesto, descripcion) 
    VALUES("Presidente", "Es el señor presidente");
INSERT INTO admin 
    (puesto, descripcion) 
    VALUES("VicePresidente", "Es el Vicepresidente");
INSERT INTO admin 
    (puesto, descripcion) 
    VALUES("Ministro de Seguridad", "Es el ministro de seguridad");

INSERT INTO desarrollador 
    (puesto, nombre, carnet, curso)
    VALUES("Desarrollador", "Marcos Valiente", "201931581", "Redes2");

INSERT INTO desarrollador 
    (puesto, nombre, carnet, curso)
    VALUES("Desarrollador", "Ana Morales", "201------", "Redes2");

INSERT INTO desarrollador 
    (puesto, nombre, carnet, curso)
    VALUES("Desarrollador", "Angel Santos", "201------", "Redes2");

INSERT INTO desarrollador 
    (puesto, nombre, carnet, curso)
    VALUES("Desarrollador", "Diego Cortez", "201------", "Redes2");

INSERT INTO moneda
    (moneda, valor)
    VALUES('Dolar USD', 8);

INSERT INTO moneda
    (moneda, valor)
    VALUES('Euro', 10);

INSERT INTO moneda
    (moneda, valor)
    VALUES('Cerbecoin', 16);

INSERT INTO departamento
    (funcion, descripcion)
    VALUES ('FuncionA', "Empieza a decir cosas Chistosas");

INSERT INTO departamento
    (funcion, descripcion)
    VALUES ('FuncionB', "Es una funcion que dice Ola");

INSERT INTO noticia
    (descripcion)
    VALUES ("La noticia de la mañanera, morena aprobo 20 reformas mientras dua lipa estaba dando un concierto");
