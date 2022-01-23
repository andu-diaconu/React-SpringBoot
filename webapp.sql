-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema webapp
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema webapp
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `webapp` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `webapp` ;

-- -----------------------------------------------------
-- Table `webapp`.`admins`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `webapp`.`admins` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `role` VARCHAR(255) NULL DEFAULT NULL,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `webapp`.`deals`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `webapp`.`deals` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `cc` FLOAT NULL DEFAULT NULL,
  `fuel` VARCHAR(255) NULL DEFAULT NULL,
  `hp` INT NULL DEFAULT NULL,
  `picture` VARCHAR(1024) NULL DEFAULT NULL,
  `price` FLOAT NULL DEFAULT NULL,
  `year` INT NULL DEFAULT NULL,
  `posted` INT NULL DEFAULT '0',
  `actual_seller_id` BIGINT NULL DEFAULT '0',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `webapp`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `webapp`.`users` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `balance` INT NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `role` VARCHAR(255) NULL DEFAULT NULL,
  `username` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 28
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
