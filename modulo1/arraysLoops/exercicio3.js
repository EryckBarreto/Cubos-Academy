const palavra = "AAAaaaAAAa";

let soma = 0;

for (let letra of palavra.toLowerCase()) {
    if (letra === "a") {
        soma++;
    }
}

console.log(`O número total de letras "A" encontrado foi de: ${soma}.`);