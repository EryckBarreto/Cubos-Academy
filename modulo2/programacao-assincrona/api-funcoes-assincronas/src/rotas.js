const express = require("express");
const { descricaoPacote } = require("./controladores/pacote");
const rota = express();

rota.get("/pacote/:nomePacote", descricaoPacote);



module.exports = rota;