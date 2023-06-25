//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 400000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 60;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1700000;

if (rendaMensalEmCentavos <= 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else if (mesesDecorridos > 60) {
    console.log("Tempo total do contrato transcorrido, aluno deve mais nada.");
} else if (totalJaPagoPeloAluno === 1800000) {
    console.log("Valor total do contrato já pago, aluno deve mais nada.");
} else {
    const valorMensal = rendaMensalEmCentavos / 100 * 0.18;
    console.log(`Que bom, uma parcela a menos! O valor da parcela desse mês é de R$ ${valorMensal.toFixed(2)}.`);
}
