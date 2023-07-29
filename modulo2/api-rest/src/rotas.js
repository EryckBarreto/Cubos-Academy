const express = require("express");
const rotas = express();
const {listarInstrutores, obterInstrutor, cadastrarInstrutor, atualizarInstrutor, atualizarStatusInstrutor, deletarInstrutor} = require("./controladores/instrutores");

rotas.get("/instrutores", listarInstrutores);
rotas.get("/instrutores/:id", obterInstrutor);
rotas.post("/instrutores", cadastrarInstrutor);
rotas.put("/instrutores/:id", atualizarInstrutor);
rotas.patch("/instrutores/:id/status", atualizarStatusInstrutor);
rotas.delete("/instrutores/:id", deletarInstrutor)

module.exports = rotas;