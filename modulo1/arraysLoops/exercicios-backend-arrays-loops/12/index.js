// const filaDeDentro = ["Jose", "Maria", "Joao"];
// const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];


while (filaDeDentro.length < 5 && filaDeFora.length > 0) {
    let primeiraFilaDeFora = filaDeFora.shift();
    filaDeDentro.push(primeiraFilaDeFora);
}

console.log(filaDeDentro);
console.log(filaDeFora);

