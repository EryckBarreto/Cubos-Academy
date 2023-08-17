------- 1

SELECT SUM(estoque)
FROM farmacia;

SELECT COUNT(medicamento)
FROM farmacia;

------- 2

SELECT MIN(idade)
FROM usuarios;

------- 3

SELECT MAX(idade)
FROM usuarios;

------- 4

SELECT AVG(idade)
FROM usuarios
WHERE idade >= 18;

------- 5

SELECT SUM(estoque)
FROM farmacia
WHERE categoria = 'blue' OR categoria = 'black';

------- 6

SELECT categoria, SUM(estoque)
FROM farmacia
WHERE categoria IS NOT NULL
GROUP BY categoria;

------- 7

SELECT SUM(estoque)
FROM farmacia
WHERE categoria IS NULL;

------- 8

SELECT COUNT(*)
FROM farmacia
WHERE categoria IS NULL;

------- 9

SELECT CONCAT(medicamento, ' ', '(', categoria, ')') AS nome_categoria
FROM farmacia
WHERE categoria IS NOT NULL;

------- 10

SELECT CONCAT(id, ' - ', ' ', medicamento, ' ', '(', COALESCE(categoria, 'sem categoria'), ')')
FROM farmacia;

------- 11

SELECT nome, idade, cadastro
FROM usuarios
WHERE cadastro <= '2020-12-31' AND cadastro >= '2020-01-01';

------- 12

SELECT nome, idade, email, AGE(CAST(cadastro AS timestamp)) AS tempo
FROM usuarios
WHERE idade < 18;

------- 13

SELECT nome, idade, email, AGE(CAST(cadastro AS date))
FROM usuarios
WHERE idade > 60;

------- 14

SELECT categoria, SUM(estoque) 
FROM farmacia
WHERE categoria IS NOT NULL
GROUP BY categoria;

------- 15

SELECT idade, COUNT(idade)
FROM usuarios
GROUP BY idade;

------- 16

SELECT categoria, SUM(estoque)
FROM farmacia
GROUP BY categoria;
