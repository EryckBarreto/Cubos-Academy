const numeros = [10, 9, 14, 22, 100, 54];

let maior = 0;
let menor = numeros[0]; // poderia ser menor = Infinity

for (let numero of numeros) {
    if (numero > maior) {
        maior = numero;
    }
}

for (let numero of numeros) {
    if (numero < menor) {
        menor = numero;
    }
}

const diferencaEntreMaiorMenor = maior - menor;


console.log(diferencaEntreMaiorMenor);