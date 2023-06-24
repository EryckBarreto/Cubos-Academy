const alturaEmCm = 197;

//seu código aqui

if (alturaEmCm < 180) {
    console.log("REPROVADO");
} else if (alturaEmCm >= 180 && alturaEmCm <= 185) {
    console.log("Posição adequada: LÍBERO");
} else if (alturaEmCm >= 186 && alturaEmCm <= 195) {
    console.log("Posição adequada: PONTEIRO");
} else if (alturaEmCm >= 196 && alturaEmCm <= 205) {
    console.log("Posição adequada: OPOSTO");
} else {
    console.log("Posição adequada: CENTRAL");
} 