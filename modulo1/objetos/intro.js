const pessoa = {
    nome: "Eryck",
    altura: 1.71,
    peso: 98
};

pessoa.nome = "Pedro"; // mesma coisa que pessoa['nome'] = "Pedro",
pessoa['altura'] = 1.72,


console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.altura}m e peso ${pessoa.peso}kg.`);