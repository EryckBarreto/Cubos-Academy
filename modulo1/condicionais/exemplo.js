const temIngresso = true;
const censura = 16;
const idade = 17;


// Exemplo 1

// if (temIngresso === true){
//     if (idade >= censura) {
//     console.log("Pode assistir ao filme.")
//     } else {
//         console.log("Idade inapropriada, não pode assistir ao filme")
//     }
// } else {
//     console.log("Sem ingresso disponível para o filme selecionado.")
// }

// Exemplo 2 - nesse caso não daria para saber o porquê de ter sido barrado

if (temIngresso === true && idade >= censura) {
    console.log("Pode entrar.");
} else {
    console.log("Barrada no cinema, shame on you.");
}