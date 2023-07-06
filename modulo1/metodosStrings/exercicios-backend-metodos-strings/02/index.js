const cpf = "12345678900";
const cnpj = "12345678000199";

function validarCPF(cpf) {
    if (cpf.length !== 11) {
        return `CPF inválido. Insira 11 dígitos.`
    } else {
        let primeiraParte = cpf.slice(0, 3);
        let segundaParte = cpf.slice(3, 6);
        let terceiraParte = cpf.slice(6, 9)
        let quartaParte = cpf.slice(9)
        return `${primeiraParte}.${segundaParte}.${terceiraParte}-${quartaParte}`
    }
}

function validarCNPJ(cnpj) {
    if (cnpj.length !== 14) {
        return `CNPJ inválido. Insira 14 dígitos.`
    } else {
        let primeiraParte = cnpj.slice(0, 2);
        let segundaParte = cnpj.slice(2, 5);
        let terceiraParte = cnpj.slice(5, 8)
        let quartaParte = cnpj.slice(8, 12)
        let quintaParte = cnpj.slice(12)

        return `${primeiraParte}.${segundaParte}.${terceiraParte}/${quartaParte}-${quintaParte}`
    }
}


console.log(validarCPF(cpf));
console.log(validarCNPJ(cnpj));