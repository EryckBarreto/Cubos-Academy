const texto = "Aprenda programar do zero na Cubos Academy";
const textoLetrasMinusculas = texto.toLocaleLowerCase();
let textoFormatado = "";

for (let letra of textoLetrasMinusculas) {
    textoFormatado += letra.replace(" ", "-");
}

console.log(textoFormatado);