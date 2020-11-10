CREATE TABLE `postagem` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`data` DATETIME NOT NULL AUTO_INCREMENT,
	`texto` varchar(1000) NOT NULL,
	`empresa_id` bigint,
	`usuario_id` bigint NOT NULL,
	`avaliacao` int(1),
	PRIMARY KEY (`id`)
);

CREATE TABLE `usuario` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome_completo` varchar(100) NOT NULL,
	`email` varchar(50) NOT NULL,
	`senha` varchar(20) NOT NULL,
	`tipo_deficiencia` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `empresa` (
	`id` bigint NOT NULL AUTO_INCREMENT,
	`nome` varchar(50) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `postagem` ADD CONSTRAINT `postagem_fk0` FOREIGN KEY (`empresa_id`) REFERENCES `empresa`(`id`);

ALTER TABLE `postagem` ADD CONSTRAINT `postagem_fk1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario`(`id`);

