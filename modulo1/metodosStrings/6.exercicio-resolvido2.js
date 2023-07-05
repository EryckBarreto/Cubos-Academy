let numero = "1,350,00";

for (let i = 0; i < numero.length; i++) {
    numero = numero.replace(",", ".");
}

console.log(numero);