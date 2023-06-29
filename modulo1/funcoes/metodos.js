function faixaEtaria(idade) {
    if (idade <= 21) {
        return "jovem";
    } else if (idade <= 65) {
        return "pessoa adulta";
    } else {
        return "pessoa idosa";
    }
}

const pessoa1 = {
    nome: "Eryck",
    idade: 70,
    profissao: "professor",
    faixaEtaria: function () {
        if (this.idade <= 21) {
            return "jovem";
        } else if (this.idade <= 65) {
            return "pessoa adulta";
        } else {
            return "pessoa idosa";
        }
    },
    apresentar: function () {
        console.log(`Olá, meu nome é ${this.nome}, sou uma ${faixaEtaria(this.idade)} de ${this.idade} anos e sou ${this.profissao}.`);
    }
}
pessoa1.apresentar();
