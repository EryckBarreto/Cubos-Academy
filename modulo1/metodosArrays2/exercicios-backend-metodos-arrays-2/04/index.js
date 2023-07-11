const numeros = [0, 122, 4, 6, 32, 8, 44]

const saoNumerosPares = (numeros) => {
    const tudoPar = numeros.every((numero) => {
        return numero % 2 === 0;
});
    if (tudoPar) {
        console.log("Array válido");
    } else {
        console.log("Array inválido");
    }
}

saoNumerosPares(numeros);