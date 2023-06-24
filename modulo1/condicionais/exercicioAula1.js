const valorDaCompra = 100;
const numeroDeParcelas = 2; 
const valorFinal = numeroDeParcelas === 1 ? valorDaCompra * 0.90 : valorDaCompra / numeroDeParcelas;
const parcelaOuParcelas = numeroDeParcelas === 1 ? "parcela à vista" : "parcelas";

console.log(`Você pode pagar à vista com 10% de desconto ou parcelado em até 6x sem juros. Como você escolheu ${numeroDeParcelas} ${parcelaOuParcelas}, o valor final é de ${valorFinal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} reais.`);