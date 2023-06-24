const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui

if (aposentada || portadoraDeDoenca) {
    console.log("Pessoa isenta do pagamento de Imposto de Renda.");
} else if (totalDeRendimentos < 2855970) {
    console.log("SAI DAQUI LEÃO, RUIM SEM VOCÊ, PIOR CONTIGO!");
} else {
    console.log("PEGA LEÃO!");
}