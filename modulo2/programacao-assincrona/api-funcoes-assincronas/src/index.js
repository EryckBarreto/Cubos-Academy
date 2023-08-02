const express = require("express");
const {getCityFromZipcode} = require("utils-playground")
const app = express();

app.get("/", async (requisicao, resposta) => {
    const cidade = await getCityFromZipcode("80010000");
    resposta.send(`A cidade encontrada foi: ${cidade}`);

});

app.listen(3000);