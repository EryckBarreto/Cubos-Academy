CREATE DATABASE aula_modelagem;

CREATE TABLE editoras (
	id serial PRIMARY KEY,
  nome text NOT NULL,
  cnpj text UNIQUE,
  data_cadastro timestamp DEFAULT now()
);

INSERT INTO editoras (nome, cnpj)
VALUES
('Cubos Academy', '00112233445566');

CREATE TABLE livros (
	isbn integer PRIMARY KEY,
  editora_id integer REFERENCES editoras(id),
  titulo text NOT NULL,
  data_publicacao date NOT NULL
);

INSERT INTO livros (
  isbn, 
  editora_id, 
  titulo, 
  data_publicacao
)
VALUES 
(12346, 1, 'Node.js Avançado', '2021-01-01');

CREATE TABLE enderecos (
	id serial PRIMARY KEY,
  editora_id integer REFERENCES editoras(id),
  cep text NOT NULL,
  rua text,
  bairro text,
  cidade text,
  estado char(2),
  pais text
);

INSERT INTO enderecos
(editora_id, cep)
VALUES
(1, '41000-000');

CREATE TABLE categorias (
	id serial PRIMARY KEY,
  nome text NOT NULL
);

CREATE TABLE livro_categoria (
	livro_isbn integer REFERENCES livros(isbn),
	categoria_id integer REFERENCES categorias(id)
);

INSERT INTO categorias (nome)
VALUES
('Tecnologia'), ('Programação'), ('Nodejs');

INSERT INTO livro_categoria (livro_isbn, categoria_id)
VALUES
(12345, 1),
(12345, 2),
(12345, 3),
(12346, 2);

CREATE TABLE comentarios (
	id serial PRIMARY KEY,
  descricao text NOT NULL,
  comentario_id integer REFERENCES comentarios(id),
  livro_isbn integer REFERENCES livros(isbn)
);

INSERT INTO comentarios (descricao, livro_isbn)
VALUES
('Livro muito bom', 12345);

INSERT INTO comentarios (comentario_id, descricao)
VALUES
(1, 'Obrigado pelo elogio');

ALTER TABLE categorias 
ADD COLUMN descricao text;

ALTER TABLE categorias 
DROP COLUMN descricao;

ALTER TABLE categorias 
ALTER COLUMN descricao type varchar(100);

CREATE TABLE telefones (
	id serial PRIMARY KEY,
  editora_id integer,
  numero text
);

ALTER TABLE telefones 
ADD CONSTRAINT fk_telefones_editoras_id
FOREIGN KEY (editora_id) REFERENCES editoras(id);