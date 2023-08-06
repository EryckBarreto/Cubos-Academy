const jogoFinal = new Date(2002, 5, 30, 8);
const primeiroGol = +jogoFinal + 82 * 60000;
const segundoGol = primeiroGol + 12 * 60000;

console.log(new Date(primeiroGol));
console.log(new Date(segundoGol));