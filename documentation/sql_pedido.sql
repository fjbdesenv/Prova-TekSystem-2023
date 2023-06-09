create database produtos;

use produtos;

/* Tabela Categoria */
create table categoria (
  codigo int auto_increment,
  descricao char(255) not null,
  data_criacao datetime default current_timestamp,
  data_atualizacao datetime default current_timestamp,
  constraint pk_categoria primary key(codigo)
);

/* Tabela Produto */
create table produto (
  codigo int auto_increment,
  codigo_categoria int not null,
  nome char(100) not null,
  descricao char(255) not null,
  preco float not null,
  imagem varchar(255),
  data_criacao datetime default current_timestamp,
  data_atualizacao datetime default current_timestamp,
  constraint pk_cliente primary key(codigo),
  constraint fk_produto_categoria foreign key(codigo_categoria) references categoria(codigo) on delete cascade
);

/* Tabela login */
create table login (
  codigo int auto_increment,
  nome char(100) not null,
  email char(100) not null unique,
  senha varchar(255) not null,
  token varchar(255) not null,
  data_criacao datetime default current_timestamp,
  data_atualizacao datetime default current_timestamp,
  constraint pk_cliente primary key(codigo)
);