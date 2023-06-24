const jogada1 = "tesoura";
const jogada2 = "tesoura";


// if ((jogada1 === "pedra" && jogada2 === "tesoura") || (jogada1 === "tesoura" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "pedra")) {
//     console.log(`Jogada vencedora: ${jogada1.toUpperCase()}!`);
//     } else if ((jogada2 === "pedra" && jogada1 === "tesoura") || (jogada2 === "tesoura" && jogada1 === "papel") || (jogada2 === "papel" && jogada1 === "pedra")) {
//         console.log(`Jogada vencedora: ${jogada2.toUpperCase()}!`);
//     } else if (jogada1 === jogada2) {
//         console.log("EMPATE");
// }

if (jogada1 === jogada2) {
    console.log("EMPATE");
} else if ((jogada1 === "pedra" && jogada2 === "tesoura") || (jogada1 === "tesoura" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "pedra")) {
    console.log(`Jogada vencedora: ${jogada1.toUpperCase()}!`); 
} else {
    console.log(`Jogada vencedora: ${jogada2.toUpperCase()}!`);
}
