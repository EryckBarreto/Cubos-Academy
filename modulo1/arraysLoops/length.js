const nomeDeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andre'];

// nomeDeEstudantes.length "length" é uma propriedade e 
// serve para identificar o tamanho de um array

// usar o modelo abaixo sempre vai garantir que será adicionado
// o item ao final do array sem quebrar o código
nomeDeEstudantes[nomeDeEstudantes.length] = "pedro";

console.log(nomeDeEstudantes.length);
console.log(nomeDeEstudantes);