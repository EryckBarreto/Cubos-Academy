const valorDaCompra = 100;
const numeroDeParcelas = 1;
const valorFinal = numeroDeParcelas === 1 ? valorDaCompra * 0.90 : valorDaCompra / numeroDeParcelas;
const parcelaOuParcelas = numeroDeParcelas === 1 ? `parcela à vista, o valor com o desconto é de R$ ${valorFinal.toFixed(2)} reais.` : `parcelas, o valor de cada parcela será de ${valorFinal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} reais.`;

    
if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
        const valorFinal = valorDaCompra * ((1 + 0.01) ** numeroDeParcelas)
        console.log(`Você pode pagar à vista com 10% de desconto ou parcelado em até 6x sem juros, a partir disso acrescenta-se 1% ao mês. Como você escolheu ${numeroDeParcelas} ${parcelaOuParcelas}, o valor é de ${parseFloat((valorFinal / numeroDeParcelas).toFixed(2))} reais cada.`);
    } else if (numeroDeParcelas > 12 || numeroDeParcelas <= 0) { 
        console.log("Número de parcelas inválidas.");
    } else {
        console.log(`Você pode pagar à vista com 10% de desconto ou parcelado em até 6x sem juros, a partir disso acrescenta-se 1% ao mês. Como você escolheu ${numeroDeParcelas} ${parcelaOuParcelas}`);
    }
    

