//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = "a";

if (quantidadeDeAguaIngerida >= 0 && quantidadeDeAguaIngerida < 1.5) {
    console.log("Risco Alto - Você está ingerindo pouquissima água, beba mais água!");
} else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3) {
    console.log("Risco Moderado - Você está ingerindo pouca água, beba mais!");
} else if (quantidadeDeAguaIngerida > 3) {
    console.log("Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!");
} else {
    console.log("Valor inválido, insira um número maior que 0.");
}
