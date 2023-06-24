const jogada1 = "pedra";
const jogada2 = "papel";


if ((jogada1 === "pedra" && jogada2 === "tesoura") || (jogada1 === "tesoura" && jogada2 === "papel") || (jogada1 === "papel" && jogada2 === "pedra")) {
    console.log(`Jogada vencedora: ${jogada1.toUpperCase()}!`);
    } else if ((jogada2 === "pedra" && jogada1 === "tesoura") || (jogada2 === "tesoura" && jogada1 === "papel") || (jogada2 === "papel" && jogada1 === "pedra")) {
        console.log(`Jogada vencedora: ${jogada2.toUpperCase()}!`);
    } else if (jogada1 === jogada2) {
        console.log("EMPATE");
    }
