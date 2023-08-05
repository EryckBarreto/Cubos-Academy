const express = require("express");
const controlador = require("./controladores/produtos")
const rota = express();

rota.get("/produtos", controlador.listarProdutos);
rota.post("/produtos", controlador.registroVendas);

module.exports = rota;