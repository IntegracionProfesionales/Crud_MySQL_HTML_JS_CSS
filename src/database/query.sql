CREATE SCHEMA `recursos` ;

CREATE TABLE `recursos`.`flujo` (
  `idflujo` INT NOT NULL AUTO_INCREMENT,
  `nombre_envia` VARCHAR(80) NOT NULL,
  `nombre_recibe` VARCHAR(80) NOT NULL,
  `tipo_recurso` VARCHAR(45) NOT NULL DEFAULT 'efectivo',
  `cantidad` INT NOT NULL,
  `FechaHora` DATETIME NOT NULL,
  PRIMARY KEY (`idflujo`));