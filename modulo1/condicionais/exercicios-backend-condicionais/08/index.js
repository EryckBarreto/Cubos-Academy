const idade = 11;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = true;

if ((idade < 12 || idade > 65) || possuiPatologia || altura < 150) {
    console.log("ACESSO NEGADO");
} else if (ehEstudante) {
    console.log("Você é estudante! E aqui estudante paga meia, passa os R$ 10,00.");
} else {
    console.log("Valor da entrada é de R$ 20,00.");
}