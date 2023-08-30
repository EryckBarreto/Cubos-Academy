CREATE DATABASE biblioteca;

CREATE TABLE autores (
	id serial PRIMARY KEY,
  nome text NOT NULL,
  idade integer
);

CREATE TABLE livros (
	id serial PRIMARY KEY,
  autor_id integer NOT NULL REFERENCES autores(id),
  nome text NOT NULL,
  genero text,
  editora text,
  data_publicacao date
);