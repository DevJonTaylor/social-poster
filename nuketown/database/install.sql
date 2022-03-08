CREATE DATABASE IF NOT EXISTS `social_poster` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `social_poster`;

CREATE TABLE `company` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,
    `phone` VARCHAR(15) DEFAULT NULL,
    `email` VARCHAR(60) DEFAULT NULL,
    `created_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `deleted_on` TIMESTAMP DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `teams` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,
    `phone` VARCHAR(15) DEFAULT NULL,
    `email` VARCHAR(60) DEFAULT NULL,
    `company_id` int(11) NOT NULL,
    `privateKey` VARCHAR(40) NOT NULL,
    `created_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `deleted_on` TIMESTAMP DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `phone` VARCHAR(15) DEFAULT NULL,
    `email` VARCHAR(60) DEFAULT NULL,
    `password` VARCHAR(40) NOT NULL,
    `team_id` int(11) NOT NULL,
    `created_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `deleted_on` TIMESTAMP DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `clients` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,
    `phone` VARCHAR(15) DEFAULT NULL,
    `email` VARCHAR(60) DEFAULT NULL,
    `company_id` INT(11) DEFAULT 0,
    `team_id` INT(11) NOT NULL,
    `active` BOOLEAN DEFAULT FALSE,
    `created_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `deleted_on` TIMESTAMP DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `status` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(60) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `platforms` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(10) NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `accounts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `client_id` int(11) NOT NULL,
    `platform_id` int(11) NOT NULL,
    `active` BOOLEAN NOT NULL,
    `created_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `deleted_on` TIMESTAMP DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `tokens` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `account_id` int(11) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `client_id` VARCHAR(255) DEFAULT NULL,
    `client_secret` VARCHAR(255) DEFAULT NULL,
    `refresh_token` VARCHAR(40) NOT NULL,
    `created_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `deleted_on` TIMESTAMP DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `posts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `status_id` INT(11) NOT NULL,
    `token_id` INT(11) NOT NULL,
    `content` TEXT NOT NULL,
    `created_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `deleted_on` TIMESTAMP DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `post_attempts` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `post_id` int(11) NOT NULL,
    `success` BOOLEAN NOT NULL,
    `failed_response` TEXT NOT NULL,
    `created_on` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci;

INSERT INTO `status` (`id`, `name`) VALUES
    (DEFAULT, 'Scheduled'),
    (DEFAULT, 'Updating'),
    (DEFAULT, 'Posting'),
    (DEFAULT, 'Failed'),
    (DEFAULT, 'Rescheduled'),
    (DEFAULT, 'Errors'),
    (DEFAULT, 'Completed');

INSERT INTO `platforms` (`id`, `name`) VALUES
    (DEFAULT, 'Facebook'),
    (DEFAULT, 'LinkedIn'),
    (DEFAULT, 'Twitter');