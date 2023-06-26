const numeros = [3, 4, 7, 8, 1, 6, 5, 10, 1000];

let soma = 0;

for (let numero of numeros) {
    if (numero % 2 === 0) {
        soma += numero;
    }
}

console.log(`A soma dos números pares é de ${soma}.`);

