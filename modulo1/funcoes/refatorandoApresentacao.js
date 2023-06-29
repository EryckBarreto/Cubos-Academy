function apresentacaoPessoa(pessoa) {
    if (pessoa.idade < 25) {
        console.log(`Sou ${pessoa.nome}, sou uma pessoa jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else if (pessoa.idade < 65) {
        console.log(`Sou ${pessoa.nome}, sou uma pessoa adulta de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    } else {
        console.log(`Sou ${pessoa.nome}, sou uma pessoa idosa de ${pessoa.idade} anos e sou ${pessoa.profissao}.`);
    }
}

const pessoa1 = {
    nome: "Eryck",
    idade: 30,
    profissao: "professor"
}

apresentacaoPessoa(pessoa1);

const pessoa2 = {
    nome: "Pedro",
    idade: 65,
    profissao: "médico"
}

apresentacaoPessoa(pessoa2);

const pessoa3 = {
    nome: "Ana",
    idade: 19,
    profissao: "estudante"
}

apresentacaoPessoa(pessoa3);