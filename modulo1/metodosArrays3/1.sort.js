const numeros = [1, 30, 4, 4, 6, 80, 34];

// ordenação crescente
numeros.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento < segundoElemento) {
        return -1;
    };

    if (primeiroElemento > segundoElemento) {
        return 1;
    };

    return 0;
});

console.log(numeros);

// ordenação decrescente
numeros.sort((primeiroElemento, segundoElemento) => {
    if (primeiroElemento < segundoElemento) {
        return 1;
    };

    if (primeiroElemento > segundoElemento) {
        return -1;
    };

    return 0;
});

console.log(numeros);