CREATE DATABASE `flujos`
/*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */
/*!80016 DEFAULT ENCRYPTION='N' */;
CREATE TABLE `efectivo` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `Envia` varchar(45) NOT NULL,
  `Recibe` varchar(45) NOT NULL,
  `Cantidad` int unsigned NOT NULL,
  `FechaHora` datetime NOT NULL,
  PRIMARY KEY (`id`, `FechaHora`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci