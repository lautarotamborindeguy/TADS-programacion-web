CREATE DATABASE IF NOT EXISTS cadastro;
USE cadastro;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(20),
    idade INT
);
