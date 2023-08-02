const express = require("express");
const rota = express();
const produtos = require("./bancodedados/produtos")
const {listarProdutos, obterProduto, calcularFrete} = require("./controladores/produtos")

rota.get("/produtos", listarProdutos);
rota.get("/produtos/:idProduto", obterProduto);
rota.get("/produtos/:idProduto/frete/:cep", calcularFrete);

module.exports = rota;