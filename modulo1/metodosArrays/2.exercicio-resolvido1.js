// function inverteArray(array) {
//     return array.reverse();
// }

// console.log(inverteArray([1, 2, 3, 4]));

function inverteString(texto) {
    const arrayDeLetras = texto.split("");
    arrayDeLetras.reverse();

    let textoInvertido = "";

    for (let letra of arrayDeLetras) {
        textoInvertido += letra;
    }
    console.log(textoInvertido);
}

inverteString("Cubos Academy");