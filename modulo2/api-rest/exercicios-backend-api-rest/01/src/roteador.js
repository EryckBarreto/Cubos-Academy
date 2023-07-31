const express = require("express");
const rota = express();
const {listarTodosAlunos} = require("./controladores/alunos")

rota.get("/alunos", listarTodosAlunos);


module.exports = rota;