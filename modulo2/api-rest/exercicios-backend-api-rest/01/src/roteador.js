const express = require("express");
const rota = express();
const {listarTodosAlunos, obterAluno, cadastrarAluno, deletarAluno} = require("./controladores/alunos")
const {validarSenha} = require("./intermediarios")


rota.use(validarSenha);
rota.get("/alunos", listarTodosAlunos);
rota.get("/alunos/:id", obterAluno);
rota.post("/alunos", cadastrarAluno);
rota.delete("/alunos/:id", deletarAluno);


module.exports = rota;