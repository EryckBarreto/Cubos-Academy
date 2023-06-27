const produtosConsumidos = [
    {
        nomeProduto: "arroz",
        precoUnitarioCentavos: 1000,
        quantidadeComprada: 1
    },

    {
        nomeProduto: "feijão",
        precoUnitarioCentavos: 700,
        quantidadeComprada: 3
    },

    {
        nomeProduto: "sal",
        precoUnitarioCentavos: 500,
        quantidadeComprada: 2
    }
]

const cartaoDeConsumo = {
    nomeCliente: "Ryu",
    idadeCliente: 30,
    produtosConsumidos
}

console.log(cartaoDeConsumo.nomeCliente);
console.log(cartaoDeConsumo.idadeCliente);
cartaoDeConsumo.idadeCliente = 29;
cartaoDeConsumo['idadeCliente'] = 27;
console.log(cartaoDeConsumo.idadeCliente);
console.log(cartaoDeConsumo.produtosConsumidos[0].nomeProduto);
console.log(cartaoDeConsumo.produtosConsumidos[produtosConsumidos.length - 1].precoUnitarioCentavos);
