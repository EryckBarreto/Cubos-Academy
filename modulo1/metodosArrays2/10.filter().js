const numeros = [1, 4, 4, 5, 3, 1, 8];

const resultadoNumeros = numeros.filter((numero) => {
    return numero >= 10;
});

console.log(resultadoNumeros);