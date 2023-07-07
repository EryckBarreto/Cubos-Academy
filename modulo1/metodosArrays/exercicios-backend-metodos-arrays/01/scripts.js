const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

const stringInvertida = frutas.reverse().join(", ");
console.log(stringInvertida);

const frutasArray = stringInvertida.split(" ");
frutasArray.reverse();
frutasArray.splice(0, 1);
frutasArray.splice(frutasArray.length - 1, 1, "Melão");
console.log(frutasArray);
