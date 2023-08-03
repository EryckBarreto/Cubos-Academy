const fs = require("fs");

console.log("antes de ler");

// leitura de arquivos síncrono
// const a = fs.readFileSync("a.txt").toString();

fs.readFile("b.txt", (erro, data) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log(data.toString());
    };
});

// console.log(a);
console.log("depois de ler");