//valor do produto comprado.
const valorDoProduto = 200000/100;
const quantidadeDoParcelamento = 10;
const valorPago = 600;
const valorRestante = valorDoProduto - valorPago;
const parcelasPagas = valorPago * quantidadeDoParcelamento / (valorDoProduto);
const parcelasRestantes = quantidadeDoParcelamento - parcelasPagas;

// considerando a proposta do exercicio, o valor das 3 primeiras constantes precisam
// ser coerentes. Se foi realizado um valor total de 2000 mil em 10x, o valor pago não
// poder ser 150 por exemplo pois o exercício não deixa claro se o valor pago é a título de entrada
// pelo contrário, deixa a entender que é em relação a  quantidade de parcelas pagas.

console.log(`Você parcelou o produto de R$ ${(valorDoProduto).toFixed(2)} em ${quantidadeDoParcelamento}x, pagou ${parcelasPagas} parcelas, no valor total de R$ ${valorPago.toFixed(2)}.`)
console.log(`Faltam ${parcelasRestantes} parcelas, totalizando o valor de R$ ${valorRestante.toFixed(2)}.`);