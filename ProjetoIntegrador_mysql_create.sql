CREATE TABLE `postagem` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`titulo` varchar(30) NOT NULL,
	`data` DATETIME NOT NULL AUTO_INCREMENT,
	`texto` TEXT(1000) NOT NULL,
	`curtidas` bigint NOT NULL,
	`tema_id` bigint NOT NULL,
	`usuario_id` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `usuario` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome_completo` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`senha` varchar(255) NOT NULL,
	`tipo` int NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `tema` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`tipo` varchar(255) NOT NULL,
	`postagens` bigint NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `postagem` ADD CONSTRAINT `postagem_fk0` FOREIGN KEY (`tema_id`) REFERENCES `tema`(`id`);

ALTER TABLE `postagem` ADD CONSTRAINT `postagem_fk1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`);

