const numeros = [1, 30, 4, 4, 6, 80, 34];

// ordenação crescente
numeros.sort((primeiroElemento, segundoElemento) => {
    return primeiroElemento - segundoElemento;
});

console.log(numeros);

// ordenação decrescente
numeros.sort((primeiroElemento, segundoElemento) => {
    return segundoElemento - primeiroElemento;
});

console.log(numeros);