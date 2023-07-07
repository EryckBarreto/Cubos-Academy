// function inverteArray(array) {
//     return array.reverse();
// }

// console.log(inverteArray([1, 2, 3, 4]));

function inverteString(texto) {
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();
    const textoFinal = arrayDeLetras.join("");
    console.log(textoFinal);
}

inverteString("Cubos Academy");