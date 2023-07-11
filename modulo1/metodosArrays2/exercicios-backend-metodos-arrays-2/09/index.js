const numeros = [10, 987, -886, 0, 12, 199, -45, -67, 88, 12];

const numerosPositivos = numeros.filter((numero) => {
    if (numero > 0) {
        return numero;
    }
});

console.log(numerosPositivos);