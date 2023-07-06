const cpf = "596.587.588-46";

function cpfSemNumero(cpf) {
    cpfFormatado = "";
    for (let caractere of cpf) {
        if (caractere === "." || caractere === "-") {
            caractere = "";
        }
        cpfFormatado += caractere;
    }
    return cpfFormatado;
}

console.log(cpfSemNumero(cpf));

