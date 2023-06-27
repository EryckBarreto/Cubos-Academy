const dadosPessoa = {
    nome: "José",
    idade: 30,
    altura: 1.73,
    temCNH: true,
    apelidos: ["Jr", "Juninho"]
};

let textoCNH = dadosPessoa.temCNH ? "possui" : "não possui";

console.log(`${dadosPessoa.nome} tem ${dadosPessoa.idade}, ${dadosPessoa.altura}, ${textoCNH} CNH e os seguintes apelidos:`);
let i = 0;
while (i < dadosPessoa.apelidos.length) {
    console.log (`- ${dadosPessoa.apelidos[i]}`)
    i++;
}