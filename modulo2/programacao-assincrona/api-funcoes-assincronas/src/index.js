const express = require("express");
const {getCityFromZipcode} = require("utils-playground")
const app = express();

app.get("/", async (requisicao, resposta) => {
    const cidade = getCityFromZipcode("80010000");
    const cidade2 = getCityFromZipcode("83404010");

    const promise = await Promise.all([cidade, cidade2]);

    // console.log(promise);

    const [resposta1, resposta2] = promise;

    resposta.send(`A cidade encontrada foi: ${resposta1} e ${resposta2} `);

});

app.listen(3000);