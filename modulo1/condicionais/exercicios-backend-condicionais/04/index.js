const ladoA = 6;
const ladoB = 5;


if (ladoA !== ladoB) {
    console.log("Não é uma bucha!");
} else if (ladoA === 0 && ladoB === 0) {
    console.log("Bucha de BRANCO!");
} else if (ladoA === 1 && ladoB === 1) {
    console.log("Bucha de ÀS!");
} else if (ladoA === 2 && ladoB === 2) {
    console.log("Bucha de DUQUE!");
} else if (ladoA === 3 && ladoB === 3) {
    console.log("Bucha de TERNO!");
} else if (ladoA === 4 && ladoB === 4) {
    console.log("Bucha de QUADRA!");
} else if (ladoA === 5 && ladoB === 5) {
    console.log("Bucha de QUINA!");
} else if (ladoA === 6 && ladoB === 6) {
    console.log("Bucha de SENA!");
} 