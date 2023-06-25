const letras = ["A", "a", "B", "C", "E", "e"];

let soma = 0;
let letraEncontrada = false


for (let letra of letras) {
    if (letra.toLocaleLowerCase() === "e") {
        soma++;
        letraEncontrada = true;
    }
}

if (!letraEncontrada) {
    console.log('Nenhuma letra "E" ou "e" encontrada :( ');
} else {
    console.log(`Foram encontradas ${soma} letras "E" ou "e".`);
}
