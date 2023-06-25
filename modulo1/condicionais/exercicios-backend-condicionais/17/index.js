//valor do produto comprado.
const valorDoProduto = 200000/100;
const quantidadeDoParcelamento = 10;
const valorPago = 600;
const valorRestante = valorDoProduto - valorPago;
const parcelasPagas = valorPago * quantidadeDoParcelamento / (valorDoProduto);
const parcelasRestantes = quantidadeDoParcelamento - parcelasPagas;

console.log(`Você parcelou o produto de R$ ${(valorDoProduto).toFixed(2)} em ${quantidadeDoParcelamento}x, pagou ${parcelasPagas} parcelas, no valor total de R$ ${valorPago.toFixed(2)}.`)
console.log(`Faltam ${parcelasRestantes} parcelas, totalizando o valor de R$ ${valorRestante.toFixed(2)}.`);