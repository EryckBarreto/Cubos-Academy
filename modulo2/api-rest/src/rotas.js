const express = require("express");
const rotas = express();
const {listarInstrutores, obterInstrutor} = require("./controladores/instrutores")

rotas.get("/instrutores", listarInstrutores);
rotas.get("/instrutores/:id", obterInstrutor)

module.exports = rotas;