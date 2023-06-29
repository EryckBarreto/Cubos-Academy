function faixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade <= 65) {
        return "pessoa adulta";
    } else {
        return "pessoa idosa";
    }
}

function apresentacaoPessoa (dadosPessoa) {   
        console.log(`Olá, meu nome é ${dadosPessoa.nome}, sou uma ${faixaEtaria(dadosPessoa.idade)} de ${dadosPessoa.idade} anos e sou ${dadosPessoa.profissao}.`);
}

const pessoa1 = {
    nome: "Eryck",
    idade: 70,
    profissao: "professor"
}

apresentacaoPessoa(pessoa1);