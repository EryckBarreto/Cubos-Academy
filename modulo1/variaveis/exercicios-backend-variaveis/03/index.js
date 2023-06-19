function descontoEmPorcentagem(valorTotalDoProduto, meuDinheiro){
    porcentagemMeuDinheiro = (meuDinheiro * 100) / valorTotalDoProduto
    porcentagemDoDesconto = 100 - porcentagemMeuDinheiro
    return console.log(`Para conseguir comprar é necessário um desconto de ${porcentagemDoDesconto.toFixed(1)}% pois o dinheiro disponível representa ${porcentagemMeuDinheiro.toFixed(1)}% do total.`)
}

descontoEmPorcentagem(110, 50);

