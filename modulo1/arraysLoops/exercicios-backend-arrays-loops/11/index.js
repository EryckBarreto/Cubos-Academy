const original = [5, 7, 13, 17, 26, 34, 118, 245, 14, 11, 655];
const intervaloArray = [];

for (let numero of original) {
    if (numero >= 10 && numero <= 20 || numero > 100)
    intervaloArray.push(numero);
}

console.log(intervaloArray);


