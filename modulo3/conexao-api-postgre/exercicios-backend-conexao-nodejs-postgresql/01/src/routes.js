const express = require('express');
const { cadastrarAutor, obterAutor, cadastrarLivroAutor } = require('./controllers/autores');
const { listarLivros } = require('./controllers/livros');

const routes = express();

routes.post('/autor', cadastrarAutor);
routes.post('/autor/:id/livro', cadastrarLivroAutor);
routes.get('/autor/:id', obterAutor);
routes.get('/livro', listarLivros)

module.exports = routes;