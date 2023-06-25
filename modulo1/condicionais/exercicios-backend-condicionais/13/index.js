//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";

//valor da mercadoria (centavos)
const valorDoProduto = 18000;

if (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito") {
    console.log(`A modalidade de pagamento escolhida tem 10% de desconto, valor final do produto é de R$ ${(valorDoProduto/100 * 0.90).toFixed(2)}.`);
} else if (tipoDePagamento === "credito") {
    console.log(`A modalidade de pagamento escolhida tem 5% de desconto, valor final do produto é de R$ ${(valorDoProduto/100 * 0.95).toFixed(2)}.`);
} else if (tipoDePagamento === "cheque"){
    console.log(`A modalidade de pagamento escolhida tem 3% de desconto, valor final do produto é de R$ ${(valorDoProduto/100 * 0.97).toFixed(2)}.`);
} else {
    console.log("Modalidade de pagamento inválida, as opções são: dinheiro, credito, debito ou cheque.");
}