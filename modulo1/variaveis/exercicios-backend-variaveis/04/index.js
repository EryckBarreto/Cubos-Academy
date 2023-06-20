function jurosCompostos(capitalInicialAplicado, tempoDaAplicacao) {
    valorTotal = capitalInicialAplicado * ((1 + 0.125) ** tempoDaAplicacao);
    return console.log(`O valor da aplicação pelo prazo de ${tempoDaAplicacao} meses será de R$ ${valorTotal.toFixed(2)}.`)
}

jurosCompostos(1000, 5);
