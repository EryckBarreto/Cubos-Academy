const original = [1, 12, 53, 88, 112, 122, 124, 126];
const numerosPares = [];

for (let numero of original) {
    if (numero % 2 === 0) {
        numerosPares.push(numero);
    }
}

console.log(numerosPares);
