const numero = [0, 1, 2, 3, 4];

const valorReduce = numero.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
});

console.log(valorReduce);

const valorReduce2 = numero.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
}, 10);

console.log((valorReduce2));