CREATE SCHEMA `recursos` ;

CREATE TABLE `recursos`.`flujo` (
  `idflujo` INT NOT NULL AUTO_INCREMENT,
  `nombre_envia` VARCHAR(80) NOT NULL,
  `nombre_recibe` VARCHAR(80) NOT NULL,
  `tipo_recurso` VARCHAR(45) NOT NULL DEFAULT 'efectivo',
  `cantidad` INT NOT NULL,
  `FechaHora` DATETIME NOT NULL,
  PRIMARY KEY (`idflujo`));
  
SELECT * FROM `recursos`.`flujo`;

INSERT INTO `recursos`.`flujo`
(`idflujo`, `nombre_envia`, `nombre_recibe`, `tipo_recurso`, `cantidad`, `FechaHora`)
VALUES
(2, "a2aa", "bbbbb", "cccc", 4, "2015-12-20 10:01:00");
