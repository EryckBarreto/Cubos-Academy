const caractere = 1; 

// if (/[AEIOU]/.test(caractere)) {
//     console.log("Vogal maiúscula");
// } else if (/[aeiou]/.test(caractere)) {
//     console.log("Vogal minúscula");
// } else if (/[0-9]/.test(caractere)) {
//     console.log("Número");
// } else {
//     console.log("Não é uma vogal");
// }

switch (true) {
    case /[AEIOU]/.test(caractere):
        console.log("Vogal maiúscula");
        break;
    case /[aeiou]/.test(caractere):
        console.log("Vogal minúscula");
        break;
    case /[0-9]/.test(caractere):
        console.log("Número");
        break;
    default:
        console.log("Não é uma vogal");
}

// switch (caractere) {
//     case "A":
//     case "E":
//     case "I":
//     case "O":
//     case "U":
//         console.log("VOGAL MAIÚSCULA");
//         break
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("vogal minúscula");
//         break;
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//         console.log("Número.");
//         break;
//     default:
//         console.log("Não é uma vogal.");

// }

