function faixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade <= 65) {
        return "pessoa adulta";
    } else {
        return "pessoa idosa";
    }
}

const faixaEtariaPessoa = faixaEtaria(30);

console.log(faixaEtariaPessoa);