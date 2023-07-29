const express = require("express");
const rotas = express();
const {listarInstrutores} = require("./controladores/instrutores")

rotas.get("/instrutores", listarInstrutores);


module.exports = rotas;