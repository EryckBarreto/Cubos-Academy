const express = require("express");
const rotas = express();
const {listarInstrutores, obterInstrutor, cadastrarInstrutor} = require("./controladores/instrutores")

rotas.get("/instrutores", listarInstrutores);
rotas.get("/instrutores/:id", obterInstrutor)
rotas.post("/instrutores", cadastrarInstrutor);
module.exports = rotas;