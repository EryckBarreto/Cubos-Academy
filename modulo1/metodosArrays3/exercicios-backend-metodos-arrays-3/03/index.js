const numeros = [1, 98, -76, 0, 120, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((acumulador, elementoAtual, index, lista) => {
    let maior = acumulador;
    if (elementoAtual > maior) {
        maior = elementoAtual;
    }
    return maior;
});

console.log(maiorNumero);