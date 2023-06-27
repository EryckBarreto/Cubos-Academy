const dadosPessoa = {
    nome: "José",
    idade: 30,
    altura: 1.73,
    temCNH: true,
    apelidos: ["Jr", "Juninho"]
};


if (dadosPessoa.temCNH) {
    dadosPessoa.temCNH = "possui";
} else {
    dadosPessoa.temCNH = "não possui";
}



console.log(`${dadosPessoa.nome} tem ${dadosPessoa.idade}, ${dadosPessoa.altura}, ${dadosPessoa.temCNH} CNH e os seguintes apelidos:`);
let i = 0;
while (i < dadosPessoa.apelidos.length) {
    console.log (`- ${dadosPessoa.apelidos[i]}`)
    i++;
}