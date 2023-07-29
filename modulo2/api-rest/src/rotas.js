const express = require("express");
const rotas = express();
const {listarInstrutores, obterInstrutor, cadastrarInstrutor, atualizarInstrutor} = require("./controladores/instrutores")

rotas.get("/instrutores", listarInstrutores);
rotas.get("/instrutores/:id", obterInstrutor)
rotas.post("/instrutores", cadastrarInstrutor);
rotas.put("/instrutores/:id", atualizarInstrutor);


module.exports = rotas;