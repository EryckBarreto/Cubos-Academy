CREATE DATABASE exercicio_crud_sql;

create table usuarios (
	id serial,
  	nome text not null,
  	idade smallint,
  	email varchar(50),
  	senha varchar(8) not null
);

INSERT INTO usuarios 
(nome, idade, email, senha)
VALUES
('Aretha Montgomery', 30, 'augue.id.ante@odioAliquam.com', 'a0B13O3L'),
('Camden H. Bartlett', 15, 'turpis.vitae.purus@risusDuisa.ca', 'p3P96F3Q'),
('Raja W. Coffey', 30, 'raja.feugiat@nonummy.com', 's5F51T7L'),
('Elton D. Olsen', 29, 'auctor@duiFuscediam.edu', 'k5X25B0R'),
('Shelley E. Frederick', 20, 'raja.feugiat@nonummy.com', 'u2D18F6E');

UPDATE usuarios
SET nome = 'Raja W. Coffey Thomas'
WHERE email = 'raja.feugiat@nonummy.com';

DELETE FROM usuarios
WHERE email = 'raja.feugiat@nonummy.com';

ALTER TABLE usuarios
ADD CONSTRAINT email_unique_usuarios
UNIQUE(email);

INSERT INTO usuarios 
(nome, idade, email, senha)
VALUES
('Jermaine G. Sellers', 16, 'ligula.Nullam@tortordictum.co.uk', 'o2P56U9U'),
('James D. Kennedy', 23, 'amet@Nulladignissim.com', 'q6B78V3V'),
('Amelia S. Harris', 29, 'Amelia S. Harris', 'l4S64Y3A'),
('Joel M. Hartman', 18, 'Joel M. Hartman', 'c4Q27D7O'),
('Elmo K. Greer', 18, 'Elmo K. Greer', 'e3P92I7R');

ALTER TABLE usuarios
ADD COLUMN situacao
BOOLEAN DEFAULT true;

SELECT * FROM usuarios;