const nomeDeEstudantes = ['jose', 'joao', 'maria', 'joana', 'andre'];

// shift remove o primeiro item do array e retorna o valor,
// se quiser pode salvar numa variável
const valorRetiradoComShift = nomeDeEstudantes.shift();

console.log(nomeDeEstudantes);
console.log(valorRetiradoComShift);

// unshift adiciona ao início do array o valor passado no método
nomeDeEstudantes.unshift('ryuzaki');
console.log(nomeDeEstudantes);