let identificador = "123";
let identificadorFormatado = "";
let nome = "José silva costa";
const nomeLista = nome.split(" ");
let nomeFormatado = "";
let email = "      jose@email.com  ";
let emailFormatado = email.trim();


if (identificador.length < 6) {
    identificadorFormatado = identificador.padStart(6, "0");
}

for (let i = 0; i < nomeLista.length; i++) {
    nomeFormatado += nomeLista[i][0].toUpperCase() + nomeLista[i].slice(1) + " ";
}





console.log(identificadorFormatado);
console.log(nomeFormatado);
console.log(emailFormatado);

