const dadosPessoaObj = {
    nome: "Andre",
    idade: 60,
    profissao: "estudante",
    altura: 1.73
}

function apresentacaoPessoa (dadosPessoa) {   
    if (dadosPessoaObj.idade <= 21) {
        console.log(`Olá, meu nome é ${dadosPessoaObj.nome}, sou um jovem de ${dadosPessoaObj.idade} anos, ${dadosPessoaObj.altura}m e sou ${dadosPessoaObj.profissao}.`);
    } else if (dadosPessoaObj.idade <= 50) {
        console.log(`Olá, meu nome é ${dadosPessoaObj.nome}, sou um adulto de ${dadosPessoaObj.idade} anos, ${dadosPessoaObj.altura}m e sou ${dadosPessoaObj.profissao}.`);
    } else {
        console.log(`Olá, meu nome é ${dadosPessoaObj.nome}, sou um senhor de ${dadosPessoaObj.idade} anos, ${dadosPessoaObj.altura}m e sou ${dadosPessoaObj.profissao}.`);
    }
}


apresentacaoPessoa(dadosPessoaObj);