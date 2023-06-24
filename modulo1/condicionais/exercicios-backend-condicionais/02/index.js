// const jogada1 = 6;
// const jogada2 = 3;

// seu código aqui

// if ((jogada1 + jogada2) % 2 === 0) {
//     console.log("Venceu o jogador que escolheu PAR.");
// } else {
//     console.log("Venceu o jogador que escolheu ÍMPAR.");
// }

function parImpar (jogada1, jogada2) {
    if ((jogada1 + jogada2) % 2 === 0) {
        console.log("Venceu o jogador que escolheu PAR.");
    } else {
        console.log("Venceu o jogador que escolheu ÍMPAR.");
    }
}

parImpar (2, 4);