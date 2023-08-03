const {mostrarPokemon, detalhesPokemon} = require("./controladores/pokemon");
const express = require("express");
const rotas = express();

rotas.get("/pokemon", mostrarPokemon);
rotas.get("/pokemon/:idOuNome", detalhesPokemon);


module.exports = rotas;
