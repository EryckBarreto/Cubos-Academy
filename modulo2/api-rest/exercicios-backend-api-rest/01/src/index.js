const express = require("express");
const app = express();
const rota = require("./roteador")

app.use(express.json());

app.use(rota);

app.listen(3000);