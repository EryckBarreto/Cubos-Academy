const nomes = ["joão", "maria", "jose", "rodrigo"];
const numeros = [2,3,4,5,6,7,8,9];
// const resultado = nomes.some((nome) => {
//     return nome === "josinnho";
// });

const resultado = numeros.some((numero) => {
    return numero % 2 === 0;
});

console.log(resultado);