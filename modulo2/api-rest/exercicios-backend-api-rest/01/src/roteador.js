const express = require("express");
const rota = express();
const {listarTodosAlunos, obterAluno} = require("./controladores/alunos")
const {validarSenha} = require("./intermediarios")


rota.use(validarSenha);
rota.get("/alunos", listarTodosAlunos);
rota.get("/alunos/:id", obterAluno);


module.exports = rota;