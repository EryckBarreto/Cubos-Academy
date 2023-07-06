//transforme "jose messias junior" 
//em "Jose Messias Junior"

const nome = "jose messias junior";
let nomeLista = nome.split(" ");
const nomeListaFormatado = [];
let nomeCorrigido = "";

for (let i = 0; i < nomeLista.length; i++) {
    nomeListaFormatado.push(nomeLista[i][0].toUpperCase() + nomeLista[i].slice(1));
}

for (let palavra of nomeListaFormatado) {
    nomeCorrigido += palavra + " ";
}

console.log(nomeCorrigido);



// let nome = "jose messias junior";
// let nomeCorrigido = "";

// for (let i = 0; i < nome.length; i++) {
//     if (i === 0) {
//         nomeCorrigido += nome[i].toUpperCase();
//     } else if (nome[i - 1] === " ") {
//         nomeCorrigido += nome[i].toUpperCase();
//     } else {
//         nomeCorrigido += nome[i];
//     }
// }

// console.log(nomeCorrigido);

