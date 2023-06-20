function calculoTaxaDeJuros(montante, capital, tempo) {
    const taxaDeJuros = ((montante / capital) ** (1 / tempo) - 1) * 100;

    // para usar três casas decimais sem arredondar
    const potencia = Math.pow(10, 3);
    const resultado = Math.floor(taxaDeJuros * potencia) / potencia;
    

    return console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${resultado}%, pois após ${tempo} meses você teve que pagar ${montante} reais.`)
}

calculoTaxaDeJuros(90000, 60000, 24)