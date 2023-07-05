//saber se um email é válido
//tem que ter pelo menos um @
//pelo menos um ponto depois do @

let email = "ryuzaki@gmail.com";

if (email.indexOf("@") !== -1) {
    let posicaoArroba = email.indexOf("@");
    if (email.indexOf(".", posicaoArroba) !== -1) {
        console.log("E-mail válido!");
    } else {
        console.log("Email inválido.");
    }
} else {
    console.log("Email inválido!");
}
