const produtosConsumidos = [
    {
        nomeProduto: "arroz",
        precoUnitarioCentavos: 1258,
        quantidadeComprada: 1
    },

    {
        nomeProduto: "feijão",
        precoUnitarioCentavos: 587,
        quantidadeComprada: 3
    },

    {
        nomeProduto: "sal",
        precoUnitarioCentavos: 602,
        quantidadeComprada: 2
    }
]

const cartaoDeConsumo = {
    nomeCliente: "Ryu",
    idadeCliente: 30,
    produtosConsumidos
}

let soma = 0;
    for (let i = 0; i < produtosConsumidos.length; i++) {
        const valorTotalParaPagamento = produtosConsumidos[i].precoUnitarioCentavos * produtosConsumidos[i].quantidadeComprada;
        soma += valorTotalParaPagamento;
    }

const restoEmCentavos = soma % 2;
const valorParaPagamento = ((soma - restoEmCentavos) / 100) + (restoEmCentavos / 100)
console.log(`Prezado ${cartaoDeConsumo.nomeCliente}, o valor a pagar é de R$ ${(valorParaPagamento).toFixed(2)}.`);